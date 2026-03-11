<script setup lang="ts">
import ChildComponent from "./ChildComponent.vue";
import { provide } from "vue";

const message = ref("¡Hola desde el componente padre!");
provide("mensaje", message);
const mensaje = ref("");
</script>

<template>
  <div class="p-4">
    <p>Mensaje: {{ mensaje }}</p>

    <ChildComponent @saludar="mensaje = $event" />

    <div class="p-4 border-2 border-purple-500 rounded">
      <h1 class="font-bold">Padre</h1>
      <input
        v-model="message"
        class="border p-1 mt-2"
        placeholder="Cambia el saludo"
      />

      <hr class="my-4" />
    </div>
  </div>
</template>
