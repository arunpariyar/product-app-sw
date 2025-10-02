<script setup lang="ts">
import { provide, ref } from "vue";
import type { Product } from "~/types/product";
const url =
  "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json";

const { data, pending, error } = await useFetch<string>(url);

const products = computed<Product[]>(() => {
  try {
    return data.value ? JSON.parse(data.value) : [];
  } catch {
    return [];
  }
});

const listings = ref<Product[]>(products.value);
let listingWithId = listings.value.map((item, index) => ({
  ...item,
  id: index.toString(),
}));

// 2. PROVIDE the data here, making it available to all children
provide("listingsData", listingWithId);
</script>

<template>
  <div class="items-parent">
    <NuxtPage />
  </div>
</template>
