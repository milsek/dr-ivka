<script setup>
import { ref, onMounted } from 'vue';

const currentSlide = ref(0);
const slides = [
  '/images/office01.jpg',
  '/images/sign.jpg', 
  '/images/bears.jpg'
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

onMounted(() => {
  setInterval(nextSlide, 5000);
});
</script>

<template>
  <div class="relative h-screen">
    <div class="absolute inset-0 overflow-hidden pt-24 md:mt-32">
      <transition-group name="fade">
        <img 
          v-for="(slide, index) in slides" 
          :key="slide"
          :src="slide"
          v-show="currentSlide === index"
          class="absolute inset-0 w-full h-full object-cover"
          alt="Carousel image"
        />
      </transition-group>
    </div>

    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative flex flex-col items-center justify-center h-full text-center text-white px-4 pt-24 md:pt-32">
      <h1 class="text-5xl lg:text-8xl font-semibold">Dr Ivka</h1>
      <h3 class="text-2xl mt-2 font-light">Pedijatrijska ordinacija</h3>
      
      <div class="flex flex-col md:flex-row gap-4 mt-10 w-full max-w-4xl">
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-md w-full md:w-1/2">
          <div class="flex items-center space-x-3">
            <img src="/icons/phone-w.png" alt="phone icon" class="w-6 h-6">
            <p class="font-medium">055 555 555</p>
          </div>
          <div class="flex items-center space-x-3 mt-4">
            <img src="/icons/location-w.png" alt="location icon" class="w-6 h-6">
            <p class="font-medium">Ćirila i Metodija 1a, Ugljevik</p>
          </div>
          <div class="flex items-center space-x-3 mt-4">
            <img src="/icons/mail-w.png" alt="location icon" class="w-6 h-6">
            <p class="font-medium">kontakt@drivka.com</p>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-md w-full md:w-1/2">
          <div class="flex space-x-3">
            <img src="/icons/clock-w.png" alt="clock icon" class="w-6 h-6">
            <div class="text-left">
              <p class="text-lg font-medium mb-2">Radno Vrijeme</p>
              <p>Pon - Pet: 09:00 - 16:00</p>
              <p>Subota: 09:00 - 13:00</p>
              <p>Nedjelja: Zatvoreni</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>