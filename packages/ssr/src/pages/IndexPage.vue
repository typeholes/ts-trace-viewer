<template>
  <q-page class="row items-evenly justify-start">
    <q-card style="width: 100%" class="q-pa-sm dark">
      <br />
      <TraceFile />
      <pre></pre>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import TraceFile from 'src/components/TraceFile.vue';
</script>
