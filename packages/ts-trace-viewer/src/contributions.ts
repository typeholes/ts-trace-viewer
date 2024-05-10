import * as packageJson from '../package.json';
import * as vscode from 'vscode';
import { getTypeById } from './data';
import { webView } from './webView';

const commandHandlers = new Map<string, (...args: any[]) => void>([
   [
      'ts-trace-viewer.runTrace',
      () => {
         vscode.window.showInformationMessage('trace not implemented');
      },
   ],

   ['ts-trace-viewer.openWebView', webView],
   [
      'ts-trace-viewer.openInBrowser',
      () => {
         vscode.env.openExternal(vscode.Uri.parse(`http://localhost:3000/`));
      },
   ],

   [
      'ts-trace-viewer.goToType',
      (...args: any[]) => {
         const typeId = args?.[0]?.commandArgs?.typeId as number | undefined;
         if (typeId === undefined) {
            console.error('could not find type id');
         } else {
            const typeRow = getTypeById(typeId);
            console.log(typeRow);

            if (
               typeRow.firstDeclaration &&
               typeRow.firstDeclaration.path &&
               typeRow.firstDeclaration.start
            ) {
               const uri = vscode.Uri.file(typeRow.firstDeclaration.path);
               const position = new vscode.Position(
                  typeRow.firstDeclaration.start.line - 1,
                  typeRow.firstDeclaration.start.character - 1
               );
               const range = new vscode.Range(position, position);

               vscode.commands.executeCommand(
                  'editor.action.goToLocations',
                  uri,
                  position,
                  [new vscode.Location(uri, range)],
                  'goto',
                  'type not found'
               );
            }
         }

         vscode.window.showInformationMessage(
            `gotoType not implemented ${JSON.stringify(args)}`
         );
      },
   ],
]);

export function registerCommands(context: vscode.ExtensionContext) {
   packageJson.contributes.commands.forEach((cmd) => {
      console.log(`registering command`, cmd.command);
      if (!commandHandlers.has(cmd.command)) {
         console.error(`missing handler for ${cmd.command}`);
         throw new Error(`missing handler for ${cmd.command}`);
      }
      const disposable = vscode.commands.registerCommand(
         cmd.command,
         commandHandlers.get(cmd.command)!
      );

      context.subscriptions.push(disposable);
   });
}
