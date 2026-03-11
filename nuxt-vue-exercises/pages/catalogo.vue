<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import { products } from "~/data/mock";
</script>

<template>
  <!--Crea una página llamada catalogo en la que vas a pintar de 3 cards usando el componente ProductCard.vue, usando los datos del mock -->
  <div>
    <h1>Catalogo</h1>

    <div class="grid grid-cols-3 gap-4 m-2">
      <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
    </div>
  </div>
</template>
