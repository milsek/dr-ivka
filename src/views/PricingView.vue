<script setup>
const pediatricServices = [
  {
    categoryName: "Pedijatrijski pregledi",
    examinations: [
      { name: "Pedijatrijski pregled prvi", lowPrice: 90, highPrice: 110 },
      { name: "Pedijatrijski pregled prva kontrola", lowPrice: 0, highPrice: 70 },
      { name: "Pedijatrijski pregled druga kontrola", lowPrice: 50, highPrice: 70 },
      { name: "Pedijatrijski pregled za drugo dete", lowPrice: 50, highPrice: 70 }
    ]
  },
  {
    categoryName: "Pregledi pred polazak/povratak",
    examinations: [
      { name: "Pregled pred polazak/povratak u kolektiv", lowPrice: 25, highPrice: 30 },
      { name: "Pregled pred polazak/povratak u kolektiv za dvoje dece", lowPrice: 30, highPrice: 50 },
      { name: "Pregled pred polazak na rekreativnu nastavu/ekskurziju", lowPrice: 25, highPrice: 30 }
    ]
  },
  {
    categoryName: "Specijalni pregledi",
    examinations: [
      { name: "Pregled pred vakcinu", lowPrice: 70, highPrice: 90 },
      { name: "Ultrazvučni pregled kukova", lowPrice: 50, highPrice: 70 },
      { name: "Ultrazvučni pregled abdomena", lowPrice: 50, highPrice: 70 },
      { name: "Ultrazvučni pregled štitaste žlezde", lowPrice: 50, highPrice: 70 }
    ]
  },
  {
    categoryName: "Terapije i obrade",
    examinations: [
      { name: "Inhalacija", lowPrice: 20, highPrice: 25 },
      { name: "Intramuskularna injekcija", lowPrice: 25, highPrice: 30 },
      { name: "Obrada pupka", lowPrice: 25, highPrice: 30 },
      { name: "Previjanje rane, skidanje konaca", lowPrice: 25, highPrice: 30 }
    ]
  }
];
</script>

<template>
  <div class="min-h-screen px-4 md:px-6 lg:px-10 pt-28 md:pt-48 pb-20">
    <div class="max-w-[1400px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-light text-center mb-12">Cjenovnik usluga</h1>
      
      <div class="space-y-8">
        <div v-for="category in pediatricServices" :key="category.categoryName" class="bg-light/20 rounded-lg shadow-sm p-6">
          <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-900">{{ category.categoryName }}</h2>
          
          <div class="space-y-4">
            <div v-for="exam in category.examinations" :key="exam.name" 
                 class="flex flex-col md:flex-row justify-between py-2 border-b border-lime-600/20 last:border-0">
              <span class="text-gray-800">{{ exam.name }}</span>
              <span class="text-gray-600 font-medium">
                {{ exam.lowPrice === exam.highPrice 
                   ? `${exam.lowPrice} KM` 
                   : `${exam.lowPrice} - ${exam.highPrice} KM` }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
