<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="border rounded p-4 shadow"
    >
      <div class="mb-2 text-2xl">{{ feature.icon }}</div>
      <h3 class="font-bold mb-1">{{ feature.title }}</h3>
      <p class="text-sm text-gray-600">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '📦',
    title: 'Component Library',
    description: 'Reusable UI components built with Vue and styled with Tailwind CSS',
  },
  {
    icon: '⚙️',
    title: 'State Management',
    description: "Efficient state management using Vue's Composition API and Pinia",
  },
  {
    icon: '🔗',
    title: 'API Integration',
    description: 'Modern data fetching with Axios and custom composables',
  },
  {
    icon: '🚀',
    title: 'Performance Optimized',
    description: 'Code splitting, lazy loading, and memoization for optimal performance',
  },
];
</script>
