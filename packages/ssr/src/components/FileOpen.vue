<script setup lang="ts">
import { ref } from 'vue';
import { appState } from '../appState';
import { getFileDataHandler } from 'src/processFile';

const props = defineProps<{
  nameKey: keyof typeof appState;
  valueKey: keyof typeof appState;
  label: string;
}>();

const pickerOpts = {
  types: [
    {
      description: 'Trace Files',
      accept: {
        'trace/*': ['.json'],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

const error = ref('');
async function getFileData() {
  // @ts-expect-error window access
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const file = await fileHandle.getFile();
  if (!(file && 'name' in file && file.name)) return;

  const handler = getFileDataHandler(file.name);
  if (handler) {
    handler(await file.text);
  }
}
</script>

<template>
  <div>
    <q-btn :label="`Open ${props.label} file`" @click="getFileData" />
    <pre style="color: red">
      {{ error }}
    </pre>
  </div>
</template>
