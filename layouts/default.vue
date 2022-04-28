<script setup lang="ts"></script>

<template>
  <div flex="~ col" min-h-screen select-none pt-10>
    <div flex-1 container m-auto>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scope></style>
