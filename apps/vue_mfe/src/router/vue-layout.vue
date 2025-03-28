<template>
  <div class="font-mono min-w-full min-h-screen">
    <aside class="fixed top-0 left-0 h-screen z-50">
      <SideNavbar />
    </aside>
    <main class="w-full min-h-screen scroll-smooth bg-secondary-100 responsive-container">
      <section
        class="section flex items-center justify-center bg-secondary-50 mx-auto border-x border-secondary-200 space-y-5"
      >
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import SideNavbar from '@vue_mfe/components/side-navbar/side-navbar.vue';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
