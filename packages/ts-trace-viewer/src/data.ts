import * as vscode from 'vscode';
import * as path from 'path';

import * as traceJson from '../trace/trace.json';
import * as typeJson from '../trace/types.json';

type TraceRow = (typeof traceJson)[number];

const checkExpressions: TraceRow[] = traceJson
   .filter((x) => x.name === 'checkExpression' && x.dur)
   .sort((a, b) => b.dur! - a.dur!)
   .slice(0, 10);

class TraceItem<T = any> extends vscode.TreeItem {
   public readonly children: T[];
   public readonly childToItem: (
      child: T,
      idx: number
   ) => TraceItem | undefined;
   public readonly commandArgs: Record<string, any>;
   constructor(args: {
      label: string;
      id: string | number;
      parent?: TraceItem<any> | undefined;
      childToItem: (child: T, idx: number) => TraceItem | undefined;
      children?: T[];
      contextValue?: string;
      commandArgs?: Record<string, any>;
   }) {
      super(args.label, vscode.TreeItemCollapsibleState.Collapsed);
      this.id = `${args.parent?.id ?? ''}/${args.id}`;

      this.childToItem = args.childToItem;
      this.children = args.children ?? [];
      this.contextValue = args.contextValue;
      this.commandArgs = args.commandArgs ?? {};
   }

   iconPath = {
      light: path.join(__filename, '..', '..', 'resources', 'todo.svg'),
      dark: path.join(__filename, '..', '..', 'resources', 'todo.svg'),
   };
}

const noChildren = () => undefined;
const stringChildren =
   (parent: TraceItem) => (label: string | undefined, id: number) =>
      label === undefined
         ? undefined
         : new TraceItem({
              label,
              id: `${id}`,
              childToItem: noChildren,
              parent,
           });
const typeIdToItem = (parent: TraceItem) => (id: number) => {
   const type = getTypeById(id);
   const ret: TraceItem = new TraceItem({
      label: `type goes here: ${id}`,
      id,
      childToItem: (c, i) => stringChildren(ret)(c, i),
      children: [type.display],
      contextValue: `type:${id}`,
      commandArgs: { typeId: id },
      parent,
   });
   return ret;
};

function checkExprToItem(c: TraceRow, id: number) {
   let ret: TraceItem = new TraceItem({
      id,
      label: `${Math.round(c.dur!) / 1000} seconds .../${(
         c.args?.path ?? 'no path'
      ).replace(/.*\//g, '')}`,
      parent: checkExpressionItem,
      children: [
         c.args?.path ?? ' no path',
         `position: ${c.args?.pos}`,
         c.args?.results?.typeId,
      ],
      childToItem: (c, i) =>
         typeof c === 'number'
            ? typeIdToItem(ret)(c)
            : stringChildren(ret)(c, i),
   });
   return ret;
}

const checkExpressionItem: TraceItem<TraceRow> = new TraceItem<TraceRow>({
   label: 'checkExpression',
   id: 'checkExpression',
   children: checkExpressions,
   childToItem: checkExprToItem,
});

export class TsTraceProvider implements vscode.TreeDataProvider<TraceItem> {
   constructor(private workspaceRoot: string | undefined) {}

   getChildren(element?: TraceItem): Thenable<TraceItem[]> {
      if (element === undefined) {
         return Promise.resolve([checkExpressionItem]);
      }

      return Promise.resolve(
         element.children
            .map(element.childToItem)
            .filter((x) => x !== undefined) as TraceItem[]
      );
   }

   getTreeItem(
      element: TraceItem
   ): vscode.TreeItem | Thenable<vscode.TreeItem> {
      return element;
   }

   /*
    private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | null | void> = new vscode.EventEmitter<Dependency | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<Dependency | undefined | null | void> = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }
  */
}

type TypeRow = {
   id: number;
   recursionId?: number;
   display?: string;
   symbolName?: string;
   firstDeclaration?: {
      path?: string;
      start?: {
         line: number;
         character: number;
      };
   };
};
const typeIndexes = new Map<number, number>();
export function getTypeById(id: number): TypeRow {
   let typeIdx = typeIndexes.get(id);
   if (typeIdx === undefined) {
      typeIdx = typeJson.findIndex((x) => x.id === id);
      typeIndexes.set(id, typeIdx);
   }

   return typeJson[typeIdx];
}
