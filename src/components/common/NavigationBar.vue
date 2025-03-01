<script setup>
import { ref } from 'vue';
import NavigationButton from './misc/NavigationButton.vue';

const isOpen = ref(false); 
</script>

<template>
  <nav class="absolute top-0 left-0 w-full bg-white shadow-md font-display font-semibold">
    <div class="max-w-[1400px] px-4 md:px-6 lg:px-10 mx-auto">
      <div class="flex justify-between h-20">
        <div class="flex-shrink-0 flex items-center">
          <RouterLink to="/">
            <div class="flex items-center justify-center">
              <img src="/images/logo.png" class="h-16 md:h-17">
            </div>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center md:space-x-3 space-x-6 xl:space-x-8">
          <NavigationButton label="Početna" to="/" />
          <NavigationButton label="O nama" to="/" />
          <NavigationButton label="Pregledi" to="/" />
          <NavigationButton label="Cjenovnik" to="/" />
          <NavigationButton label="Kontakt" to="/" />
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-gray-500 hover:text-gray-700 focus:outline-none hover:cursor-pointer">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-in-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in-out"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isOpen" class="md:hidden border-t border-gray-200 mt-4">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NavigationButton label="Početna" to="/" class="block" />
            <NavigationButton label="O nama" to="/" class="block" />
            <NavigationButton label="Pregledi" to="/" class="block" />
            <NavigationButton label="Cjenovnik" to="/" class="block" />
            <NavigationButton label="Kontakt" to="/" class="block" />
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
