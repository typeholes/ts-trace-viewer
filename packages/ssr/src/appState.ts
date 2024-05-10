import { reactive } from 'vue';
import { trpc } from './trpcRouter';
import { TraceData } from './traceData';

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

type IndexedTraceData = ReturnType<typeof processTraceData>;
export function processTraceData() {
  const data: (TraceData[number] & { idx: number })[] = [];
  for (const fileName in appState.traceFiles) {
    //@ts-expect-error idx added below
    data.push(...appState.traceFiles[fileName].data);
  }

  data.sort((a, b) => a.ts - b.ts);

  for (let i = 0; i < data.length; i++) {
    data[i].idx = i;
  }

  appState.data = data;

  return data;
}
