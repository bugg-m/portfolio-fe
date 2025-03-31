<template>
  <nav
    :class="[
      'navbar-bg relative text-light shadow-lg transition-all duration-300 h-screen px-2 py-5 pt-20 space-y-2',
      isOpen ? 'w-48' : 'w-0 -translate-x-10',
    ]"
  >
    <button
      :class="[
        'h-16 w-6 bg-secondary-600 rounded-none rounded-r-xl absolute transition-all duration-300',
        isOpen ? 'left-48' : 'left-10',
      ]"
      @click="toggleOpen"
    >
      <span
        :class="[isOpen ? '' : 'rotate-180', 'text-neutral-200 transition-transform duration-300']"
      >
        <img
          :src="step"
          alt="step icon"
          class="invert"
        />
      </span>
    </button>
    <main :class="[isOpen ? 'translate-x-0' : '-translate-x-32']">
      <NavItems :menu-items="menuItems" />
    </main>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavItems from './nav-items.vue';
import { MenuItem } from '@vue_mfe/types/core-vue-types';
import { step } from '@vue_mfe/constants/icons';

const menuItems: MenuItem[] = [{ name: 'overview', path: '/' }];

const isOpen = ref(true);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
