<template>
    <div class="container mx-auto">
      <div class="py-8">
        <div class="flex items-center flex-col mb-4">
          <h1 class="text-2xl font-bold">Formulaire - {{ formulaire.id }}</h1>
          <div class="">
            <button @click="getPdf()" class="px-4 py-2 bg-blue-500 text-white rounded">Download PDF</button>
          </div>
        </div>
  
        <div class="bg-white shadow-md rounded" id="pdf-container">
          <div class="p-4">
            <img :src="iconSrc" alt="">
            <h3 class="text-lg font-bold mb-4">Enregistrement No {{ formulaire.id }}</h3>
  
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-bold">Nom:</p>
                <p>{{ formulaire.nom }}</p>
              </div>
              <div>
                <p class="font-bold">Prenom:</p>
                <p>{{ formulaire.prenom }}</p>
              </div>
              <div>
                <p class="font-bold">Date de Naissance:</p>
                <p>{{ formulaire.birthdate }}</p>
              </div>
              <div>
                <p class="font-bold">Pays:</p>
                <p>{{ formulaire.pays }}</p>
              </div>
              <div>
                <p class="font-bold">Numero de telephone:</p>
                <p>{{ formulaire.tel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import html2pdf from 'html2pdf.js'
import iconSrc from '@/assets/icon.jpeg';
// import fileDownload from 'js-file-download'

const route = useRoute()

const formulaire = ref({})

const getFormulaire = () => {
  const formulaireID = route.params.id

  axios
    .get(`/formulaires/formulaires/${formulaireID}`)
    .then(response => {
      formulaire.value = response.data
    })
    .catch(error => {
      console.log(JSON.stringify(error))
    })
}

const getPdf = () => {
//   const formulaireID = route.params.id

//   axios
//     .get(`/formulaires/formulaires/${formulaireID}/generate_pdf/`, {
//       responseType: 'blob',
//     })
//     .then(res => {
//       fileDownload(res.data, `formulaire_${formulaireID}.pdf`)
//     })
//     .catch(err => {
//       console.log(err)
//     })
    const element = document.getElementById('pdf-container')

    // Options for the PDF generation
    const options = {
    filename: `formulaire_${route.params.id}.pdf`,
    margin: [20, 20, 20, 20],
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }

    html2pdf().set(options).from(element).save()
}

onMounted(() => {
    getFormulaire();
})

</script>