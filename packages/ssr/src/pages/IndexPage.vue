<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="Ping" @click="ping" />

    <br />
    <pre>
      {{ JSON.stringify(appState.traceFileData, null, 2) }}
    </pre>
  </q-page>
</template>

<script setup lang="ts">
import { trpc } from 'src/trpcRouter';
import { appState } from 'src/appState';

function ping() {
  trpc.ping.query();
}
</script>
