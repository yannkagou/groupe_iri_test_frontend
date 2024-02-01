<template>
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Evaluations</h2>
      <div v-for="evaluation in evaluations" :key="evaluation.id" class="bg-gray-100 p-4 mb-4">
        <h3 class="text-lg font-semibold mb-2">Évaluation {{ evaluation.nom }}</h3>
        <!-- <p>Client ponctuel: {{ evaluation.client_ponctuel }}</p>
        <p>Produit pratique: {{ evaluation.produit_pratique }}</p>
        <p>Prix cher: {{ evaluation.prix_cher }}</p> -->
      </div>
  
      <h2 class="text-2xl font-bold mb-4">Ajouter une évaluation</h2>
      <div class="bg-gray-100 p-4">
        <p class="mb-2">Nom de l'évaluation:</p>
        <input type="text" v-model="nom" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <p class="mb-2">Client ponctuel:</p>
        <input type="range" v-model="clientPonctuel" min="0" max="20" class="w-full mb-2">
        <p class="mb-2">Produit pratique:</p>
        <input type="range" v-model="produitPratique" min="0" max="20" class="w-full mb-2">
        <p class="mb-2">Prix cher:</p>
        <input type="range" v-model="prixCher" min="0" max="20" class="w-full mb-2">
        <button @click="saveEvaluation" class="bg-blue-500 text-white px-4 py-2 rounded">Enregistrer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useToast } from 'vue-toast-notification';

  const toast = useToast();
  
  let evaluations = ref([]);
  let nom = ref('');
  let clientPonctuel = ref(10);
  let produitPratique = ref(10);
  let prixCher = ref(10);
  
  const getEvaluations = async () => {
    await axios.get('/evaluations/evaluations/')
      .then(response => {
        console.log(response.data)
        evaluations.value = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const saveEvaluation = async () => {
    const data = {
      nom: nom.value,
      client_ponctuel: clientPonctuel.value,
      produit_pratique: produitPratique.value,
      prix_cher: prixCher.value,
    };
  
    await axios.post('/evaluations/evaluations/', data)
      .then(response => {
          getEvaluations();
          toast.success("Evaluation ajoutée")
          clientPonctuel.value = 10;
          produitPratique.value = 10;
          prixCher.value = 10;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  onMounted(() => {
    getEvaluations();
  });
  </script>

<style lang="scss" scoped>

</style>