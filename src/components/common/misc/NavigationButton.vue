<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => route.path === props.to);
</script>

<template>
  <a :href="to" class="text-sm md:text-base font-display font-semibold text-gray-700 hover:text-gray-900 md:px-3 py-2 transition ease-in duration-100" :class="{ 'border-b-2 border-light md:border-gray-700': isActive }">
    {{ label }}
  </a>
</template>