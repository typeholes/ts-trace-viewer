import { z } from 'zod';
import type * as vscode from 'vscode';
import { initTRPC } from '@trpc/server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export function mkAppRouter(vs: typeof vscode) {
  const t = initTRPC.create();

  const appRouter = t.router({
    ping: t.procedure.query(() => {
      if (vs) {
        vs.window.showInformationMessage('pinged from front end');
        return 'pinged';
      } else {
        return 'no vs';
      }
    }),
    projectPath: t.procedure.query(() => {
      if (!vs) {
        return '/home/hw/projects/ts-diag-transform';
      }
      return vs.workspace.workspaceFolders?.[0]?.name;
    }),
    openFile: t.procedure.input(z.string()).query((opts) => {
      const fileName = opts.input;
      vs.commands.executeCommand('vscode.open', vs.Uri.parse(fileName));

      return 'opened';
    }),
  });

  return appRouter;
}

export type AppRouter = ReturnType<typeof mkAppRouter>;

export const mkTrpc = (port: string) =>
  createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `http://localhost:${port}/trpc`,
      }),
    ],
  });

export const trpc = mkTrpc(globalThis?.location?.port ?? 3000);
