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
    flex="~ col"
    justify-center
    items-center
  >
    <img src="/logo.svg" w-30 h-30 mb-3>
    <h1>Vue to React</h1>
    <a
      class="icon-btn"
      mt-3
      text="xl center"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/ouduidui/vue-to-react"
      target="_blank"
      title="GitHub"
    />
  </div>
  <CompareItem
    v-for="compare in compares"
    :key="compare.id"
    :compare="compare"
  />
</template>

<style scope></style>
