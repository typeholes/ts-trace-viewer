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
}

const _appState: AppState = {
  projectPath: 'Not loaded',
  error: '',
  traceFiles: {},
};
export const appState = reactive(_appState);

trpc.projectPath
  .query()
  .then((path) => (appState.projectPath = path ?? '.'))
  .catch(() => {
    /**/
  });
