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
  <a :href="to" class="text-sm text-gray-700 hover:text-accent md:px-3 py-2 transition ease-in duration-150">
    {{ label }}
  </a>
</template>