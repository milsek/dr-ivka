<script setup>
import { RouterView } from 'vue-router';
import NavigationBar from '@/components/common/NavigationBar.vue';
import FooterContainer from '@/components/common/FooterContainer.vue';
</script>

<template>
  <NavigationBar />
  <RouterView class="font-display" />
  <FooterContainer />
</template>
