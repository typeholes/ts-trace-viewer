import * as vscode from 'vscode';
import { set } from 'zod';

let diagnosticCollection: vscode.DiagnosticCollection;

export function initDiagnostics(ctx: vscode.ExtensionContext): void {
   diagnosticCollection =
      vscode.languages.createDiagnosticCollection('ts-trace-viewer');
   ctx.subscriptions.push(diagnosticCollection);
}

export function clearTaceDiagnostics() {
   if (diagnosticCollection) {
      diagnosticCollection.clear();
   }
}

export async function addTraceDiagnostic(
   fileName: string,
   pos: number,
   end: number,
   duration: number
) {
   const uri = vscode.Uri.file(fileName);
   const document = await vscode.workspace.openTextDocument(uri);
   const msg = `check time ${Math.round(duration / 1000) / 1000}`;
   const startPos = document.positionAt(pos);
   const endPos = document.positionAt(end);
   let range = new vscode.Range(startPos, endPos);
   let diagnostics = [...(diagnosticCollection.get(uri) ?? [])];
   diagnostics.push(
      new vscode.Diagnostic(range, msg, vscode.DiagnosticSeverity.Warning)
   );
   diagnosticCollection.set(uri, diagnostics);
}

declare namespace globalThis {
   var tsTraceViewer: {
      durationWarning: number;
      addTraceDiagnostic(
         fileName: string,
         pos: number,
         end: number,
         duration: number
      ): void;
      clearTraceDiagnostic(): void;
      gotoPosition(fileName: string, pos: number): void;
   };
}

let durationWarning = 1 * 1000 * 1000;
globalThis.tsTraceViewer = {
   ...(globalThis.tsTraceViewer ?? {}),
   ...{
      durationWarning,
      addTraceDiagnostic,
      clearTraceDiagnostic: clearTaceDiagnostics,
      gotoPosition,
   },
};
const limitKey = 'checkTimeWarning';

function setLimit() {
   clearTaceDiagnostics();
   const configuration = vscode.workspace.getConfiguration('ts-trace-viewer');
   durationWarning =
      (configuration.has(limitKey)
         ? (configuration.get(limitKey) as number)
         : 1) *
      1000 *
      1000;
   globalThis.tsTraceViewer.durationWarning = durationWarning;
}
setLimit();

vscode.workspace.onDidChangeConfiguration((e) => {
   if (e.affectsConfiguration('ts-trace-viewer')) {
      setLimit();
   }
});

async function gotoPosition(fileName: string, pos: number) {
   const vs = vscode;
   const uri = vs.Uri.file(fileName);
   const document = await vs.workspace.openTextDocument(uri);
   const position = document.positionAt(pos);
   const location = new vs.Location(uri, position);
   vs.commands.executeCommand(
      'editor.action.goToLocations',
      uri,
      position,
      [location],
      'goto',
      'location not found'
   );
}
