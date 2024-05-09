<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
import { appState } from 'src/appState';
import { computed, ref } from 'vue';

const names = computed(() => {
  if (appState.traceFileData === undefined) {
    return [];
  }

  const names = new Set<string>();
  for (const line of appState.traceFileData) {
    names.add(line.name);
  }
  return [...names.values()].sort();
});

const selectedLines = computed(
  () =>
    appState.traceFileData
      ?.filter((x) => x.name === selectedName.value && (x.dur ?? 0) !== 0)
      .sort((a, b) => b.dur! - a.dur!),
);

const selectedName = ref('checkExpression');
</script>

<template>
  <div>
    <q-select label="Name" :options="names" v-model="selectedName" />
    <div class="rows">
      <div v-for="line of selectedLines" :key="line.ts">
        {{ line.name }} : {{ Math.round(line.dur ?? 0 / 1000) / 1000 }}
        {{ line.args?.pos }} {{ line.args?.path?.replace(appState.projectPath??'.','.') }}
      </div>
    </div>
  </div>
</template>
