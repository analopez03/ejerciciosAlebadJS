<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  price: number;
  image: string;
}>();
</script>

<template>
  <div class="border rounded p-4">
    <img
      :src="image"
      alt="Product Image"
      class="w-full h-48 object-cover mb-4"
    />
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-700 mb-4">{{ description }}</p>
    <p class="text-lg font-semibold text-green-600">${{ price }}</p>
  </div>
</template>
