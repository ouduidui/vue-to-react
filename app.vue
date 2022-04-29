<script setup lang="ts">
useHead({
  title: 'Vue to React',
  link: [
    { ref: 'icon', href: '/logo.svg', type: 'image/svg+xml' },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
