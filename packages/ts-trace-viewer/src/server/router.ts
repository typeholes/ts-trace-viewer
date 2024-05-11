import { z } from 'zod';
import * as vscode from 'vscode';
import { initTRPC } from '@trpc/server';
import { createTRPCProxyClient, httpBatchLink, httpLink } from '@trpc/client';
import { durationWarning } from '../diagnostics';
import {
   clearTaceDiagnostics,
   addTraceDiagnostic,
   gotoPosition,
} from '../diagnostics';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import { observable } from '@trpc/server/observable';

export function createContext({ req, res }: CreateFastifyContextOptions) {
   return { req, res };
}
export type Context = Awaited<ReturnType<typeof createContext>>;

export type AddWarningArgs = z.infer<typeof addWarningArgs>;
export const addWarningArgs = z.object({
   fileName: z.string(),
   pos: z.number(),
   end: z.number(),
   duration: z.number(),
});

export function mkAppRouter() {
   const t = initTRPC.create();

   const appRouter = t.router({
      durationWarning: t.procedure.query(() => {
         return durationWarning;
      }),
      clearWarnings: t.procedure.query(() => {
         clearTaceDiagnostics();
         return 'cleared';
      }),
      addWarning: t.procedure.input(addWarningArgs).query((opts) => {
         const { fileName, pos, end, duration } = opts.input;
         addTraceDiagnostic(fileName, pos, end, duration);
         return 'added';
      }),
      gotoPosition: t.procedure
         .input(z.object({ fileName: z.string(), pos: z.number() }))
         .query((opts) => {
            const { fileName, pos } = opts.input;
            gotoPosition(fileName, pos);
            return 'went';
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
