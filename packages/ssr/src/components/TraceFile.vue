<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
import { appState } from 'src/appState';
import { trpc } from 'src/trpcRouter';
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

function openFile(fileName: string | undefined) {
  if (!fileName) return;
  trpc.openFile.query(fileName);
}
</script>

<template>
  <div>
    <q-select label="Name" :options="names" v-model="selectedName" />
    <div class="rows">
      <div v-for="line of selectedLines" :key="line.ts">
        <q-card @click="openFile(line.args?.path)">
          {{ line.name }} : {{ Math.round(line.dur ?? 0 / 1000) / 1000 }}
          {{ line.args?.pos }}
          {{
            line.args?.path?.replace(
              new RegExp(`^.*${appState.projectPath ?? '.'}/`),
              '.',
            )
          }}
        </q-card>
      </div>
    </div>
  </div>
</template>
