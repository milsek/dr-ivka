<script setup>
import FooterNavigationButton from '@/components/common/misc/FooterNavigationButton.vue';
</script>

<template>
  <footer class="bg-light w-full shadow-inner">
    <div>
      <div class="flex flex-col-reverse md:flex-col space-y-6 py-10 md:py-18 gap-y-6 md:gap-y-0 max-w-[1400px] px-4 md:px-6 lg:px-10 mx-auto">

        <div class="flex flex-col md:flex-row space-y-1.5 md:space-y-0 md:space-x-12 mx-auto">
          <FooterNavigationButton label="Početna" to="/" class="block" />
          <FooterNavigationButton label="O nama" to="/" class="block" />
          <FooterNavigationButton label="Pregledi" to="/" class="block" />
          <FooterNavigationButton label="Cjenovnik" to="/" class="block" />
          <FooterNavigationButton label="Kontakt" to="/kontakt" class="block" />
        </div>

        <div class="mx-auto">
          <img src="/images/logo.png" alt="okaywhen logo" class="w-80 md:w-88" />
        </div>

      </div>

      <div class="space-y-4 text-center md:text-left bg-slate-400 py-2.5 border-t border-slate-500">
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between w-full
        max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-gray-700 s">
          <div>
            <h1 class="text-lg font-bold">
              Dr Ivka Džuveleković
            </h1>
            <h2 class="text-sm">Pedijatrijska ordinacija</h2>
          </div>
          <div class="my-auto md:text-right">
            <p class="text-xs">Copyright © {{ (new Date()).getUTCFullYear() }} - All rights reserved</p>
            <p class="text-sm">Created by <span class="italic font-bold text-gray-800">FriedLiver</span></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>