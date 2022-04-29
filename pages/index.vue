<script setup lang="ts">
import { compares } from '~/composables/compares'
</script>

<template>
  <div
    font-mono
    text="3xl center"
    pb-4
    mb-6
    border="b-1 gray-500/20"
  >
    Vue to React
  </div>
  <CompareItem
    v-for="compare in compares"
    :key="compare.id"
    :compare="compare"
  />
</template>

<style scope></style>
