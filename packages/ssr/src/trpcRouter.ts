import { z } from 'zod';
import type * as vscode from 'vscode';
import { initTRPC } from '@trpc/server';
import { createTRPCProxyClient, httpBatchLink, httpLink } from '@trpc/client';

type TsTraceViewer = {
  durationWarning: number;
  addTraceDiagnostic(
    fileName: string,
    pos: number,
    end: number,
    duration: number,
  ): void;
  clearTraceDiagnostic(): void;
};

export type addWarningArgs = z.infer<typeof addWarningArgs>;
export const addWarningArgs = z.object({
  fileName: z.string(),
  pos: z.number(),
  end: z.number(),
  duration: z.number(),
});

export function mkAppRouter(vs: typeof vscode, tsTraceViewer: TsTraceViewer) {
  const t = initTRPC.create();

  tsTraceViewer ??= {
    durationWarning: 15,
    addTraceDiagnostic: () => {
      /**/
    },
    clearTraceDiagnostic: () => {
      /**/
    },
  };
  const appRouter = t.router({
    durationWarning: t.procedure.query(() => {
      return tsTraceViewer.durationWarning;
    }),
    clearWarnings: t.procedure.query(() => {
      tsTraceViewer.clearTraceDiagnostic();
      return 'cleared';
    }),
    addWarning: t.procedure.input(addWarningArgs).query((opts) => {
      const { fileName, pos, end, duration } = opts.input;
      tsTraceViewer.addTraceDiagnostic(fileName, pos, end, duration);
      return 'added';
    }),
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
      // httpBatchLink({
      httpLink({
        url: `http://localhost:${port}/trpc`,
        // maxURLLength: 2083,
      }),
    ],
  });

export const trpc = mkTrpc(globalThis?.location?.port ?? '3000');
