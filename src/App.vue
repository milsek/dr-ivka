<script setup>
import { RouterView } from 'vue-router';
import NavigationBar from './components/common/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <RouterView class="font-display pt-20" />
</template>
