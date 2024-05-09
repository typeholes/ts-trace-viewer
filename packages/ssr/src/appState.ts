import { reactive } from 'vue';
import { TraceLine } from './traceLine';
import { trpc } from './trpcRouter';

export const appState = reactive({
  traceFileName: undefined as string | undefined,
  traceFileData: undefined as TraceLine | undefined,
  projectPath: 'Not loaded' as string | undefined,
});

trpc.projectPath
  .query()
  .then((path) => (appState.projectPath = path ?? '.'))
  .catch(() => {
    /**/
  });
