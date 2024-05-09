import * as trace from '../trace/trace.json';
import * as types from '../trace/types.json';

const checkExpr = trace.filter((x) => x.name === 'checkExpression');

const typeChecks = new Map<number, { dur: number; checks: typeof checkExpr }>();

checkExpr.forEach((x) => {
   const typeId = x.args?.results?.typeId;
   if (typeId !== undefined) {
      if (!typeChecks.has(typeId)) {
         typeChecks.set(typeId, { dur: x.dur ?? 0, checks: [x] });
      } else {
         const typeCheck = typeChecks.get(typeId)!;
         typeCheck.dur += x.dur ?? 0;
         typeCheck.checks.push(x);
      }
   }
});

const sorted = [...typeChecks.entries()].sort((a, b) => b[1].dur - a[1].dur);

let found = false;
let longest = sorted[0];
while (!found && sorted.length > 0) {
   longest = sorted[0];
   const longestId = longest[0];

   // {"id":60,"recursionId":54,"flags":["StringLiteral"],"display":"\"function\""},
   // {"id":61,"recursionId":55,"unionTypes":[53,54,55,56,57,58,59,60],"flags":["Union"]},
   // {"id":62,"symbolName":"IArguments","recursionId":56,"firstDeclaration":{"path":"/home/hw/projects/TypeScript/lib/lib.es5.d.ts","start":{"line":402,"character":2},"end":{"line":408,"character":2}},"flags":["Object"]},
   type Type = {
      id: number;
      display?: string;
      firstDeclaration?: {
         path: string;
         start: { line: number; character: 2 };
      };
   };
   const type = (types as Type[]).find((x) => x.id === longestId);
   if (!type) {
      throw new Error(`type id not found: ${longestId}`);
   }
   //    if (type.display) {
   //       console.log('longest', longestId, type.display);
   //       found = true;
   //    } else
   if (type.firstDeclaration) {
      console.log(
         'longest',
         longestId,
         type.firstDeclaration.path,
         `${type.firstDeclaration.start.line}:${type.firstDeclaration.start.character}`
      );
      found = true;
   } else {
      sorted.shift();
   }
}

for (const x of longest[1].checks) {
   console.log(
      `   ms: ${Math.round(x.dur ?? 0)} ${x.name} ${x.args?.path} pos:${x.args
         ?.pos}`
   );
}
