<script setup lang="ts">
import { getFileDataHandler } from 'src/processFile';

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

async function getFileData() {
  // @ts-expect-error window access
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const file = await fileHandle.getFile();
  if (!(file && 'name' in file && file.name)) return;

  const handler = getFileDataHandler(file.name);
  if (handler) {
    handler(await file.text());
  }
}
</script>

<template>
  <div>
    <q-btn label="Open trace file" @click="getFileData" />
  </div>
</template>
