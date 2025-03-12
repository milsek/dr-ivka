<script setup>
import FooterNavigationButton from '@/components/common/misc/FooterNavigationButton.vue';
</script>

<template>
  <footer class="bg-light w-full shadow-inner">
    <div class="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 pb-4 md:pt-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Logo -->
        <div class="flex flex-col items-center md:items-start mt-8 md:mt-0 md:col-span-2">
          <img src="/images/logo.png" alt="Dr Ivka logo" class="w-80 md:w-72" />
        </div>

        <!-- Kontakt -->
        <div class="flex flex-col items-center md:items-end text-center md:text-right mt-2 md:mt-0">
          <h3 class="text-xl md:text-lg font-semibold text-lime-950 mb-2 md:mb-4">Kontakt</h3>
          <div class="space-y-2 text-lime-800 text-lg md:text-base">
            <div class="flex md:flex-row-reverse justify-center md:justify-startstart items-center">
              <img src="/icons/location.png" alt="location icon" class="w-4 h-4 opacity-70 mr-3 ml-0 md:ml-3 md:mr-0 select-none">
              <p>Ćirila i Metodija 1a, 76330 Ugljevik</p>
            </div>
            <div class="flex md:flex-row-reverse justify-center md:justify-start items-center">
              <img src="/icons/phone.png" alt="phone icon" class="w-4 h-4 opacity-70 mr-3 ml-0 md:ml-3 md:mr-0 select-none">
              <p>055 555 555</p>
            </div>
            <div class="flex md:flex-row-reverse justify-center md:justify-start items-center">
              <img src="/icons/mail.png" alt="email icon" class="w-4 h-4 opacity-70 mr-3 ml-0 md:ml-3 md:mr-0 select-none">
              <p>kontakt@drivka.com</p>
            </div>
          </div>
        </div>

        <!-- Navigacija -->
        <div class="flex flex-col items-center md:items-end">
          <h3 class="text-xl md:text-lg font-semibold text-lime-950 mb-2 md:mb-4 md:text-right">Navigacija</h3>
          <div class="flex flex-col space-y-2">
            <FooterNavigationButton label="Početna" to="/" />
            <FooterNavigationButton label="O nama" to="/o-nama" />
            <FooterNavigationButton label="Pregledi" to="/pregledi" />
            <FooterNavigationButton label="Cjenovnik" to="/cjenovnik" />
            <FooterNavigationButton label="Kontakt" to="/kontakt" />
          </div>
        </div>

      </div>

      <div class="flex flex-col md:flex-row justify-between mt-8 pt-6 text-center">
        <div class="flex flex-col md:text-left my-auto py-2 md:py-0 bg-white md:bg-transparent">
          <h1 class="text-2xl md:text-lg font-bold text-gray-700">Dr Ivka Džuveleković</h1>
          <h2 class="text-lg md:text-sm text-gray-700">Pedijatrijska ordinacija</h2>
        </div>
        <div class="md:text-right text-gray-600 my-auto mt-2 md:mt-0">
          <p class="text-sm md:text-xs">Copyright © {{ (new Date()).getUTCFullYear() }} - All rights reserved</p>
          <p class="text-base md:text-sm">Created by <span class="italic font-bold text-gray-700">FriedLiver</span></p>
        </div>
      </div>

    </div>
  </footer>
</template>