// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { TsTraceProvider } from './data';
import { registerCommands } from './contributions';
import { initDiagnostics } from './diagnostics';
import { startServer } from './server/server';

declare global {
   var vs: typeof vscode;
}
globalThis['vs'] = vscode;

// // @ts-expect-error  not bothering to type this
// const foo = import('../resources/ssr/index.js').then((server) => {
//    console.log('server loaded');
// });


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
   // Use the console to output diagnostic information (console.log) and errors (console.error)
   // This line of code will only be executed once when your extension is activated
   console.log(
      'Congratulations, your extension "ts-trace-viewer" is now active!'
   );

   registerCommands(context);
   initDiagnostics(context);
   startServer();
}

// This method is called when your extension is deactivated
export function deactivate() {}

// storage
// ExtensionContext.storageUri https://code.visualstudio.com/api/references/vscode-api#ExtensionContext.storageUri

// view icons https://code.visualstudio.com/api/extension-guides/tree-view#view-actions
