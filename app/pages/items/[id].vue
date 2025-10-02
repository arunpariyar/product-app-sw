<script setup lang="ts">
import type { Product } from "~/types/product";
const route = useRoute();

const id = route.params.id as string;

const listingData = inject<Product[]>("listingsData");

const product = computed(() => {
  listingData?.find((p) => p.id === id);
});

console.log(product.value);
</script>
<template>
  <h2>{{ product }}</h2>
</template>
