<template>
    <div>
        <h1 class="text-2xl font-bold">Authentification de signature en ligne</h1>
      <div v-if="!isAuthenticated" class="mt-4">
        <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" class="mx-auto"></canvas>
        <div class="mx-auto flex justify-center">
            <button @click="clearCanvas" class="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded mr-4">Effacer la signature</button>
            <button @click="authenticate" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Authentifier la signature</button>
        </div>
      </div>
      <div v-else class="mt-4 flex justify-center">
        <h2 class="text-xl font-bold">Signature authentifiée !</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'vue-toast-notification';

  const toast = useToast();
  
  const drawing = ref(false);
  const isAuthenticated = ref(false);
  const signatureData = ref(null);
  const canvas = ref(null);
  
  const startDrawing = () => {
    drawing.value = true;
  };
  
  const stopDrawing = () => {
    drawing.value = false;
  };
  
  const draw = (event) => {
    if (!drawing.value) return;
    const canvasElement = canvas.value;
    const ctx = canvasElement.getContext('2d');
    const rect = canvasElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  
  const clearCanvas = () => {
    const canvasElement = canvas.value;
    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };
  
  const authenticate = () => {
    const canvasElement = canvas.value;
    const dataURL = canvasElement.toDataURL();
    isAuthenticated.value = true;
    toast.success("Signature ajoutée")
  };
  </script>
  
  <style lang="scss" scoped>
  canvas {
    border: 1px solid black;
  }
  </style>