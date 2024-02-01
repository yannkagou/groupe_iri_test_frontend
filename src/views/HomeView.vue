<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Choisir le menu</h1>
    <div class="card">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <RouterLink to="/evaluation" class="p-4 bg-gray-100 rounded text-center block w-full">Evaluation</RouterLink>
        </div>
        <div>
          <RouterLink to="/formulaire" class="p-4 bg-gray-100 rounded text-center block w-full">Formulaire</RouterLink>
        </div>
        <div>
          <RouterLink to="/authentification" class="p-4 bg-gray-100 rounded text-center block w-full">Signature numerique</RouterLink>
        </div>
        <div>
          <RouterLink to="/releve" class="p-4 bg-gray-100 rounded text-center block w-full">Releve</RouterLink>
        </div>
        <div>
          <RouterLink to="/securisation" class="p-4 bg-gray-100 rounded text-center block w-full">Securisation</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 600px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
}

.card div {
  display: flex;
  flex-wrap: wrap;
}

.card div > div {
  flex: 1 0 50%;
}

.card div p {
  margin: 0;
}

.card div a {
  display: block;
  text-decoration: none;
}
</style>