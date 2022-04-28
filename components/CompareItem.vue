<script setup lang="ts">
defineProps<{
  compare: {
    id: string
    label: string
    data: {
      title: 'Vue' | 'React'
      html: string
      code: string
    }[]
  }
}>()

</script>

<template>
  <div font-mono text="2xl center" mb-2>
    {{ compare.label }}
  </div>
  <div font-mono grid="~ cols-2" gap="x-10 y-5" w-90vw mb-20>
    <div
      v-for="(item, index) in compare.data"
      :key="index"
    >
      <div text="xl center" pb-3>
        {{ item.title }}
      </div>
      <iframe
        bg-white border="1 dark:0 gray-500/50 rounded" w-full mb-3 h-200px
        :src="item.html"
      />
      <pre bg="gray-500/20" border-rounded px-8 overflow-y-scroll>
        <code>{{ item.code }}</code>
      </pre>
    </div>
  </div>
</template>

<style scope></style>
