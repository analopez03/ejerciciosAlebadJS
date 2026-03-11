<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>

<template>
  <ul>
    <li v-for="(item, id) in items" :key="id">
      {{ item }}
    </li>
  </ul>
</template>
