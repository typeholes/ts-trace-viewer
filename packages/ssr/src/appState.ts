import { reactive } from 'vue';
import { trpc } from './trpcRouter';
import { TraceData, TraceLine, TypeLine } from './traceData';

interface AppState {
  projectPath: string;
  error: string;
  traceFiles: Record<
    string,
    { name: string; type: 'trace' | 'type'; data: TraceData }
  >;
  data: IndexedTraceData;
}

const _appState: AppState = {
  projectPath: 'Not loaded',
  error: '',
  traceFiles: {},
  data: [],
};
export const appState = reactive(_appState);

trpc.projectPath
  .query()
  .then((path) => (appState.projectPath = path ?? '.'))
  .catch(() => {
    /**/
  });

type IndexedTraceData = (
  | (TraceLine & { idx: number })
  | (TypeLine & { idx: number })
)[];
export function processTraceData(): void {
  trpc.clearWarnings.query().then(() => {
    trpc.durationWarning.query().then((limit) => {
      console.log('limit', limit);
      const data: (TraceData[number] & { idx: number })[] = [];

      for (const fileName in appState.traceFiles) {
        //@ts-expect-error idx added below
        data.push(...appState.traceFiles[fileName].data);
      }
      console.log('pushed trace data');

      data.sort((a, b) => a.ts - b.ts);

      console.log('sorted trace data');

      let remainingWarnings = 100;

      for (let i = 0; i < data.length; i++) {
        // data[i].idx = i;
        const line = data[i] as TraceLine;
        if (i % 1000 === 0) console.log('1000 processed');
        if (
          line.dur &&
          line.dur > limit &&
          line.args?.path &&
          line.args?.pos &&
          line.args?.end
        ) {
          trpc.addWarning.query({
            fileName: line.args.path,
            pos: line.args.pos,
            end: line.args.end,
            duration: line.dur,
          });
          console.log('sent warning');
          if (--remainingWarnings < 0) break;
        }
      }

      appState.data = data;
    });
  });
}
