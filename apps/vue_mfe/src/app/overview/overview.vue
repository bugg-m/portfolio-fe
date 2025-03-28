<template>
  <main class="max-w-4xl mx-auto my-16">
    <header class="text-2xl sm:text-3xl md:text-4xl header text-neutral-800 mb-4">
      Welcome to our Vue Microservice!
    </header>

    <h2 class="sm:text-lg title text-base md:text-xl text-secondary-700 mb-6">
      Modern Frontend Development with Vue
    </h2>

    <VueTechnologies />
    <VueFeatures />
    <VueBenefits />

    <p
      class="paragraph-sm bg-primary-50 text-neutral-700 mb-6 italic border-x-4 border-primary-300 p-4"
    >
      "Building scalable user interfaces requires both technical excellence and thoughtful design
      patterns."
    </p>

    <p class="paragraph-sm animate-paragraph text-neutral-600">
      Explore this microservice to see these concepts in action and discover how they can be applied
      to your own projects. Each component is designed to be easily reusable and adaptable to
      different use cases.
    </p>
  </main>
</template>

<script setup lang="ts">
import VueBenefits from './vue-benefits.vue';
import VueFeatures from './vue-features.vue';
import VueTechnologies from './vue-technologies.vue';
</script>
