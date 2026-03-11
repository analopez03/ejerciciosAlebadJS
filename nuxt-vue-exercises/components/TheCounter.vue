<script lang="ts" setup>
import { useCounter } from "../composables/useCounter";
const { count, increment, decrement, reset } = useCounter(0);

const statusMessage = computed(() => {
  if (count.value === 0) return "Estas en el valor minimo";
  if (count.value === 10) return "¡Límite máximo alcanzado!";
  if (count.value > 0 && count.value < 10)
    return "Estás en los parámetros adecuados";
  return "";
});

const counter = ref(0);
</script>

<template>
  <div class="p-4 border rounded shadow-sm bg-white">
    <h1>{{ statusMessage }}</h1>
    <h2
      class="text-2xl font-bold mb-4"
      :class="{ 'text-blue-500': count < 10, 'text-green-500': count >= 10 }"
    >
      Counter: {{ count }}
    </h2>

    <h2
      class="text-xl font-semibold mb-4"
      :class="{ 'text-blue-500': count < 10, 'text-green-500': count >= 10 }"
    >
      Counter x2: {{ count * 2 }}
    </h2>

    <div class="flex gap-2">
      <button
        @click="increment"
        :disabled="count >= 10"
        class="bg-blue-500 disabled:bg-gray-300 text-white px-4 py-2 rounded transition"
      >
        Increment
      </button>

      <button
        @click="decrement"
        :disabled="count <= 0"
        class="bg-red-500 disabled:bg-gray-300 text-white px-4 py-2 rounded transition"
      >
        Decrement
      </button>

      <button
        @click="reset"
        class="bg-gray-500 text-white px-4 py-2 rounded transition"
      >
        Reset
      </button>
    </div>

    <p v-if="count === 10" class="mt-2 text-orange-500 text-sm font-bold">
      ¡Límite máximo alcanzado!
    </p>
  </div>

  <p v-if="counter === 10">Número es 10</p>
  <!-- El número nunca va a llegar a diez, no aumenta -->
  <p v-else>El número es {{ counter }}</p>
</template>
