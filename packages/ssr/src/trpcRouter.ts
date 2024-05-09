// import { z } from 'zod';
import type * as vscode from 'vscode';
import { initTRPC } from '@trpc/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export function mkAppRouter(vs: typeof vscode) {
  const t = initTRPC.create();

  const appRouter = t.router({
    ping: t.procedure.query(() => {
      return 'pinged';
    }),
  });

  return appRouter;
}

export type AppRouter = ReturnType<typeof mkAppRouter>;

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
