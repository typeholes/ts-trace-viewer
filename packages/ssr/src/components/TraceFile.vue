<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script setup lang="ts">
import { appState } from 'src/appState';
import { trpc } from 'src/trpcRouter';
import { computed, ref } from 'vue';
import TypesDuring from 'components/TypesDuring.vue';
import { TraceLine } from 'src/traceData';

const names = computed(() => {
  if (appState.data === undefined) {
    return [];
  }

  const names = new Set<string>();
  for (const line of appState.data) {
    if ('name' in line) names.add(line.name);
  }
  return [...names.values()].sort();
});

const selectedLines = computed(
  () =>
    appState.data
      ?.filter(
        (x) =>
          'name' in x && x.name === selectedName.value && (x.dur ?? 0) !== 0,
      )
      .sort((a, b) => b.dur! - a.dur!)
      .slice(0, 50) as TraceLine[],
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
    <div class="column">
      <div v-for="line of selectedLines" :key="line.ts">
        <q-card @click="openFile(line.args?.path)" class="column">
          <div>
            {{ line.name }} : {{ Math.round(line.dur ?? 0 / 1000) / 1000 }}
            {{
              line.args?.path?.replace(
                new RegExp(`^.*${appState.projectPath ?? '.'}/`),
                '.',
              )
            }}
            : {{ line.args?.pos }}
          </div>
          <div>
            <TypesDuring :ts="line.ts" :duration="line.dur ?? 0" />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
