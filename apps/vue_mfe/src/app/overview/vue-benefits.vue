<template>
  <div>
    <h3 class="text-xl title font-bold mb-6 text-neutral-800">Key Benefits</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <div
        v-for="(benefit, index) in benefits"
        :key="index"
        class="border rounded p-4 shadow"
      >
        <span class="mb-2 text-2xl">{{ benefit.icon }} </span>

        <h4 class="font-bold mb-1">{{ benefit.title }}</h4>
        <p class="text-sm text-gray-600">{{ benefit.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: '⚙️',
    title: 'Modularity',
    description: 'Independent components that can be composed to build complex interfaces',
  },
  {
    icon: '🚀',
    title: 'Developer Experience',
    description: 'Fast refresh, TypeScript support, and comprehensive tooling',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Mobile-first approach ensuring great experiences on all devices',
  },
];
</script>
