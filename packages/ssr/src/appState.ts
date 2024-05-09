import { reactive } from 'vue';
import { TraceLine } from './traceLine';

export const appState = reactive({
  traceFileName: undefined as string | undefined,
  traceFileData: undefined as TraceLine | undefined,
});
