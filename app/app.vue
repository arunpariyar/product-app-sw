<script setup lang="ts">
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
    <div v-for="product in listings">
      <div
        :style="{
          backgroundImage: `url(${getImageName(product.filename)})`,
          height: `${product.height}px`,
          width: `${product.width}px`,
        }"
        class="bg-cover bg-center"
      ></div>
      <p class="text-red">{{ product.title }}</p>
    </div>
  </div>
</template>
