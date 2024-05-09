import { ssrMiddleware } from 'quasar/wrappers';

import * as trpcExpress from '@trpc/server/adapters/express';
import { mkAppRouter } from 'src/trpcRouter';
import type * as vscode from 'vscode';

declare global {
  // eslint-disable-next-line no-var
  var vs: typeof vscode;
  // eslint-disable-next-line no-var
  var tsTraceViewerPort: number;
}
const vs = globalThis.vs;

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(
  async ({ app /*, resolveUrlPath, publicPath, render */ }) => {
    // created for each request

    const appRouter = mkAppRouter(vs);

    // created for each request
    const createContext = ({
      req,
      res,
    }: trpcExpress.CreateExpressContextOptions) => ({}); // no context
    type Context = Awaited<ReturnType<typeof createContext>>;

    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
      }),
    );
  },
);
