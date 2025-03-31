<template>
  <section class="flex flex-col space-y-1">
    <div
      v-for="(item, index) in menuItems"
      :key="index"
      :class="isChild ? 'text-xs text-neutral-300' : 'text-neutral-100'"
    >
      <RouterLink
        :to="item.path"
        class="flex gap-1 group items-center capitalize px-2 py-1 rounded hover:text-neutral-800 hover:bg-secondary-100"
      >
        <span>{{ item.name }}</span>
        <span
          v-if="item.hasChildren"
          :class="[
            'cursor-pointer group-hover:text-neutral-700 text-neutral-50 transition-transform duration-300 hover:bg-secondary-100 rounded-md',
            openItems[index] ? '' : '-rotate-90',
          ]"
          @click.stop="toggleItem(index)"
        >
          {{ arrow }}
        </span>
      </RouterLink>
      <div
        :class="[
          'transition-opacity ml-3 pl-1 duration-300 border-l border-secondary-100',
          openItems[index] && item.hasChildren && item.children ? 'opacity-100 my-1' : 'opacity-0',
        ]"
      >
        <NavItems
          v-if="openItems[index] && item.hasChildren && item.children"
          :menu-items="item.children"
          :is-child="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { arrow } from '@vue_mfe/constants/icons';
import { MenuItem } from '@vue_mfe/types/core-vue-types';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps<{ menuItems: MenuItem[]; isChild?: boolean }>();

const openItems = ref<{ [key: number]: boolean }>({});

const toggleItem = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};
</script>
