<template>
    <div class="container mx-auto">
      <div class="py-8">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold">Releve - {{ releve.id }}</h1>
        </div>
  
        <div class="bg-white shadow-md rounded" id="pdf-container">
          <div class="p-4">
            <img :src="iconSrc" alt="">
            <h3 class="text-lg font-bold mb-4">Releve No {{ releve.id }}</h3>
  
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-bold">Leadership individuel:</p>
                <p>{{ releve.leadershipIndividuel }} / 20</p>
                <p>Coefficient. 2</p>
              </div>
              <div>
                <p class="font-bold">Leadership individuel:</p>
                <p>{{ releve.leadershipEtatique }} / 20</p>
                <p>Coefficient. 4</p>
              </div>
              <div>
                <p class="font-bold">Leadership individuel:</p>
                <p>{{ releve.leadershipCivilisationnel }} / 20</p>
                <p>Coefficient. 5</p>
              </div>
              <div>
                <p class="font-bold">Moyenne Totale:</p>
                <p>{{ totalScore }} / 20</p>
              </div>
              <div>
                <p class="font-bold">Signature de l'ecole:</p>
                <p>{{ signature }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import iconSrc from '@/assets/icon.jpeg';

const route = useRoute()

const releve = ref({})

const getReleve = async () => {
  const releveID = route.params.id

  await axios
    .get(`/releves/releves/${releveID}`)
    .then(response => {
        releve.value = response.data
    })
    .catch(error => {
      console.log(JSON.stringify(error))
    })
}

const totalScore = computed(() => {
  const scores = [
    releve.value.leadershipIndividuel,
    releve.value.leadershipEtatique,
    releve.value.leadershipCivilisationnel
  ];
  const coefficients = [2, 4, 5];

  const sum = scores.reduce((acc, score, index) => {
    return acc + (score / 20) * coefficients[index];
  }, 0);

  return sum.toFixed(2);
});

const signature = computed(() => {
  return totalScore.value >= 40 ? 'Admis' : 'Refusé';
});

onMounted(() => {
    getReleve();
})

</script>