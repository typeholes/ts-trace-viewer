<script setup lang="ts">
import { ref } from 'vue';
import { appState } from '../appState';
import { TraceLine } from 'src/traceLine';

const props = defineProps<{
  nameKey: keyof typeof appState;
  valueKey: keyof typeof appState;
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
  if (file && 'name' in file && file.name) {
    appState[props.nameKey] = file.name;
  } else {
    return;
  }

  const obj = JSON.parse(await file.text());
  const traceLine = TraceLine.safeParse(obj);
  if (traceLine.error) {
    error.value = JSON.stringify(traceLine.error, null, 2);
  } else {
    appState[props.valueKey] = traceLine.data as any;
  }
}
</script>

<template>
  <div>
    <q-btn label="Open Trace File" @click="getFileData" />
    <pre style="color: red">
      {{ error }}
    </pre>
  </div>
</template>
