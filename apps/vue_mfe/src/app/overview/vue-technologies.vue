<template>
  <p class="text-neutral-600 mb-8 paragraph-sm animate-paragraph">
    This microservice showcases various features built with
    <span
      v-for="(tech, index) in technologies"
      :key="tech"
    >
      <template v-if="index > 0 && index === technologies.length - 1"> and </template>
      <template v-else-if="index > 0 && index < technologies.length - 1">, </template>
      <span class="font-semibold text-neutral-700">{{ tech }}</span> </span
    >. It demonstrates modern development patterns and best practices for building scalable frontend
    applications.
  </p>
</template>

<script setup lang="ts">
const technologies = ['Vue', 'JavaScript', 'Tailwind CSS'];
</script>
