<script setup lang="ts">
const saludo = inject("mensaje", "Valor por defecto si no hay provider");
</script>

<template>
  <button
    @click="$emit('saludar', '¡Hola desde el hijo!')"
    class="bg-blue-400 text-white px-4 py-2 m-2 rounded"
  >
    Saludar
  </button>

  <div class="p-4 bg-purple-50 border border-purple-300 rounded">
    <h3 class="font-bold text-purple-800">Hijo (con Inject)</h3>
    <p class="mt-2">
      El padre dice: <span class="italic">{{ saludo }}</span>
    </p>
  </div>
</template>
