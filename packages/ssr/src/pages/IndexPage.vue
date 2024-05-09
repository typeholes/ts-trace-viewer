<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="Ping" @click="ping" />
  </q-page>
</template>

<script setup lang="ts">
import { trpc } from 'src/trpcRouter';

function ping() {
  trpc.ping.query();
}
</script>
