<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex-center"
    >
      <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 text-center">
        <div class="flex justify-between items-center border-b pb-2">
          <h2 class="text-lg font-semibold text-primary-700">Manish Kumar</h2>
          <button
            class="text-gray-500 hover:text-gray-800"
            @click="onClose"
          >
            &times;
          </button>
        </div>
        <div class="flex justify-center my-4">
          <img
            :src="developer2"
            alt="Welcome"
            class="object-contain w-32 h-auto"
          />
        </div>
        <h3 class="text-lg font-bold text-primary-700 mb-2">Welcome to My Portfolio</h3>
        <p class="text-sm text-gray-600 mb-4">
          Welcome to the Vue Micro Frontend of my portfolio! This section showcases a collection of
          mini Vue projects that highlight modern UI patterns and interactive design. Explore these
          projects to see how dynamic Vue components and innovative features come together in a
          micro-frontend architecture.
        </p>
        <div class="flex justify-center gap-2 mt-4">
          <button
            class="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
            @click="onClose"
          >
            Explore with me
          </button>
          <button
            class="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
            @click="onClose"
          >
            Explore on your own
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { StorageNamesEnum } from '@enums/storage-names-enum';
import { getLocalStorage, setLocalStorage } from '@utils/core-utilities';
import { developer2 } from '@vue_mfe/constants/illustrations';

const showModal = ref(false);

onMounted(() => {
  const isWelcomeModalViewed = getLocalStorage<boolean>(
    StorageNamesEnum.IS_VUE_WELCOME_MODAL_VIEWED
  );
  if (!isWelcomeModalViewed) {
    setTimeout(() => {
      showModal.value = true;
    }, 5000);
  }
});

const onClose = () => {
  setLocalStorage<boolean>({
    name: StorageNamesEnum.IS_VUE_WELCOME_MODAL_VIEWED,
    value: true,
    expiryTime: '4d',
  });
  showModal.value = false;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
