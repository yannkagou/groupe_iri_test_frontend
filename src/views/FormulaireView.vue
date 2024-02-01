<template>
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Formulaires</h2>
   
  
      <h2 class="text-2xl font-bold mb-4">Remplissez le formulaire</h2>
      <div class="bg-gray-100 p-4">
        <p class="mb-2">Nom:</p>
        <input type="text" v-model="nom" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <p class="mb-2">Prenom:</p>
        <input type="text" v-model="prenom" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <p class="mb-2">Date de naissance:</p>
        <input type="date" v-model="birthdate" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <p class="mb-2">Pays:</p>
        <input type="text" v-model="pays" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <p class="mb-2">Telephone:</p>
        <input type="text" v-model="tel" class="border border-gray-300 p-2 rounded mb-2 w-full">
        <button @click="saveFormulaire" class="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useToast } from 'vue-toast-notification';

  const router = useRouter();

  const toast = useToast();
  
  let formulaire = reactive({});
  let formulaires = ref([]);
  let nom = ref('');
  let prenom = ref('');
  let birthdate = ref('');
  let pays = ref('');
  let tel = ref('');
  
  const getFormulaires = async () => {
    await axios.get('/formulaires/formulaires/')
      .then(response => {
        console.log(response.data)
        formulaires.value = response.data
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const saveFormulaire = async () => {
    const data = {
      nom: nom.value,
      prenom: prenom.value,
      birthdate: birthdate.value,
      pays: pays.value,
      tel: tel.value,
    };
  
    await axios.post('/formulaires/formulaires/', data)
      .then(response => {
          console.log(response.data)
        //   getFormulaires();
        //   nom.value = '';
        //   prenom.value = '';
        //   birthdate.value = '';
        //   pays.value = '';
        //   tel.value = '';
          Object.assign(formulaire, response.data)
          toast.success("Formulaire ajouté")
          router.push({ name: 'formulairedetails', params: { id: formulaire.id } })
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  onMounted(() => {
    getFormulaires();
  });
  </script>

<style lang="scss" scoped>

</style>