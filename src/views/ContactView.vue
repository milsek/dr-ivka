<script setup>
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const mapContainer = ref(null)

onMounted(() => {
  // Fix for the marker icon issue in webpack
  delete L.Icon.Default.prototype._getIconUrl;
  
  let icon = L.icon({
    iconUrl: '/icons/marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // Coordinates for Ugljevik
  const map = L.map(mapContainer.value).setView([44.69268295470412, 18.992659138699235], 17)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 20,
  }).addTo(map)

  // Add marker
  L.marker([44.69268295470412, 18.992659138699235], { icon, clickable: false }).addTo(map);
})
</script>

<template>
  <div class="shadow-md min-h-screen mt-28 md:mt-44">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] px-4 md:px-6 lg:px-10 mx-auto">
      <!-- Contact Information -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900">Kontaktirajte nas</h2>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-medium text-gray-900">Adresa</h3>
            <p class="text-gray-600">Kralja Petra Prvog 7a</p>
            <p class="text-gray-600">76330 Ugljevik</p>
            <p class="text-gray-600">Bosna i Hercegovina</p>
          </div>

          <div>
            <h3 class="font-medium text-gray-900">Kontakt</h3>
            <p class="text-gray-600">Telefon: +387 55 555 555</p>
            <p class="text-gray-600">Email: info@drivka.com</p>
          </div>

          <div>
            <h3 class="font-medium text-gray-900">Radno vrijeme</h3>
            <p class="text-gray-600">Ponedeljak - Petak: 08:00 - 16:00</p>
            <p class="text-gray-600">Subota: 09:00 - 13:00</p>
            <p class="text-gray-600">Nedelja: Zatvoreno</p>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="h-[500px] border" ref="mapContainer"></div>
    </div>
  </div>
</template>

<style>
.leaflet-container {
  z-index: 1;
}
</style>
