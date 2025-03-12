<script setup>
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
</script>

<template>
  <a :href="to" class="text-lg md:text-base font-display text-center md:text-right font-medium text-lime-800 hover:text-lime-700 py-0.5 transition ease-in duration-150">
    {{ label }}
  </a>
</template>
