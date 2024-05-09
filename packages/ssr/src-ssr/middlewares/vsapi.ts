import { ssrMiddleware } from 'quasar/wrappers';
import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

import * as vscode from 'vscode';

declare global {
  // eslint-disable-next-line no-var
  var vs: typeof vscode;
  // eslint-disable-next-line no-var
  var tsTraceViewerPort: number;
}
const vs = globalThis.vs;

export const t = initTRPC.create();
export const appRouter = t.router({
  getUser: t.procedure.input(z.string().optional()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: 'Bilbo' };
  }),
  ping: t.procedure.query(() => {
    vs.window.showInformationMessage('pinged from front end');
    return 'pinged';
  }),
  // createUser: t.procedure
  //   .input(z.object({ name: z.string().min(5) }))
  //   .mutation(async (opts) => {
  //     // use your ORM of choice
  //     return await UserModel.create({
  //       data: opts.input,
  //     });
  //   }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

const createContext = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
// type Context = Awaited<ReturnType<typeof createContext>>;

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/developing-ssr/ssr-middlewares
export default ssrMiddleware(
  async ({ app, port /*, resolveUrlPath, publicPath, render */ }) => {
    // something to do with the server "app"
    global.tsTraceViewerPort = port;
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
      }),
    );
  },
);

