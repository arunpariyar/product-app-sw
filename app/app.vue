<script setup lang="ts">
import ProductCard from "./components/ProductCard.vue";
import type { Product } from "@/types/product";
import { getImageName } from "#imports";
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

const searchQuery = ref("");

function searchByName(query: string) {
  listings.value = products.value.filter((product) =>
    product.title.includes(query)
  );
}
</script>
<template>
  <div>
    <h1>Find your food !</h1>
    <input
      type="text"
      v-model="searchQuery"
      @keydown.enter="searchByName(searchQuery)"
    />
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 md:gap-10 md:p-10"
    >
      <ProductCard
        v-for="product in listings"
        :filename="product.filename"
        :title="product.title"
      />
    </div>
  </div>
</template>
