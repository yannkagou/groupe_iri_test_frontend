<template>
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Releves</h2>
      <div v-for="releve in releves" :key="releve.id" class="bg-gray-100 p-4 mb-4">
        <h3 class="text-lg font-semibold mb-2">Releve {{ releve.id }}</h3>
        <RouterLink :to="{'name': 'relevedetails', params:{'id': releve.id}}"><p>Details</p></RouterLink>
      </div>
  
      <h2 class="text-2xl font-bold mb-4">Ajouter un relevé</h2>
      <div class="bg-gray-100 p-4">
        <p class="mb-2">Leadership individuel:</p>
        <input type="number" v-model="leadershipIndividuel" class="border border-gray-300 p-2 rounded mb-2 w-full" max="20" min="0">
        <p class="mb-2">Leadership etatique:</p>
        <input type="number" v-model="leadershipEtatique" class="border border-gray-300 p-2 rounded mb-2 w-full" max="20" min="0">
        <p class="mb-2">Leadership civilisationnel:</p>
        <input type="number" v-model="leadershipCivilisationnel" class="border border-gray-300 p-2 rounded mb-2 w-full" max="20" min="0">
        <button @click="saveReleve" class="bg-blue-500 text-white px-4 py-2 rounded">Enregistrer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useToast } from 'vue-toast-notification';

  const toast = useToast();
  
  let releves = ref([]);
  let leadershipIndividuel = ref(0);
  let leadershipEtatique = ref(0);
  let leadershipCivilisationnel = ref(0);
  
  const getReleves = () => {
    axios.get('/releves/releves/')
      .then(response => {
        console.log(response.data)
        releves.value = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const saveReleve = () => {
    const data = {
      leadershipIndividuel: leadershipIndividuel.value,
      leadershipEtatique: leadershipEtatique.value,
      leadershipCivilisationnel: leadershipCivilisationnel.value,
    };
  
    axios.post('/releves/releves/', data)
      .then(response => {
        console.log(response.data)
        getReleves();
        toast.success("Relevé ajouté")
        leadershipIndividuel.value = 0;
        leadershipEtatique.value = 0;
        leadershipCivilisationnel.value = 0;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  onMounted(() => {
    getReleves();
  });
  </script>

<style lang="scss" scoped>

</style>