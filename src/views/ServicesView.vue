<script setup>
const sections = [
  {
    title: null,
    content: "Naša ordinacija nudi širok spektar pedijatrijskih pregleda i medicinskih usluga prilagođenih deci svih uzrasta. Sa posvećenošću i pažnjom brinemo o zdravlju vašeg deteta kroz preventivne, dijagnostičke i terapijske preglede."
  },
  {
    title: "Opšti pedijatrijski pregledi",
    content: "Redovni pregledi su ključni za praćenje zdravlja i razvoja dece. Prvi pregled novorođenčeta pruža detaljnu procenu zdravstvenog stanja i savetovanje roditelja. Kontrolni pregledi omogućavaju kontinuirano praćenje rasta i razvoja, dok pregled za drugo dete osigurava personalizovan pristup svakom mališanu."
  },
  {
    title: "Pregledi pred polazak u kolektiv", 
    content: "Priprema deteta za vrtić, školu ili ekskurziju podrazumeva zdravstveni pregled koji potvrđuje da je dete spremno za kolektiv. Ovi pregledi uključuju procenu opšteg zdravlja, provere imuniteta i savetovanje roditelja o merama zaštite i prevencije bolesti u kolektivnim okruženjima."
  },
  {
    title: "Ultrazvučni pregledi",
    content: "Ultrazvučna dijagnostika je siguran i neinvazivan metod za detaljno ispitivanje različitih delova tela. Pregledi kukova su ključni za rano otkrivanje razvojne displazije, dok ultrazvuk abdomena pomaže u dijagnostici stanja probavnog sistema. Pregled štitaste žlezde omogućava pravovremeno otkrivanje eventualnih poremećaja u radu ove važne žlezde."
  },
  {
    title: "Terapije i medicinske intervencije",
    content: "Pored dijagnostičkih pregleda, naša ordinacija nudi i različite medicinske tretmane i terapije. Inhalacije pomažu u lečenju respiratornih tegoba, dok intramuskularne injekcije omogućavaju efikasnu primenu terapije. Obrada pupka kod novorođenčadi i previjanje rana su usluge koje osiguravaju pravilan oporavak i higijenu kože."
  },
  {
    title: null,
    content: "U našoj ordinaciji, svako dete dobija pažnju i negu koju zaslužuje, uz individualizovan pristup i stručan medicinski nadzor.",
    isItalic: true
  }
];
</script>

<template>
  <div class="min-h-screen px-4 md:px-6 lg:px-10 pt-36 md:pt-48 pb-20">
    <div class="max-w-[800px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-light text-center mb-12">Pregledi</h1>

      <div class="space-y-12">
        <div v-for="(section, index) in sections" :key="index">
          <h2 v-if="section.title" class="text-2xl font-medium text-lime-600 mb-4">{{ section.title }}</h2>
          <p :class="['text-gray-800', { 'mb-6': index === 0, 'italic': section.isItalic }, !section.title ? 'text-xl' : 'text-base']">
            {{ section.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>