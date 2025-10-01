<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
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
    <div class="flex flex-col h-[50vh] items-center justify-center gap-15">
      <h1 class="text-center text-2xl uppercase tracking-widest font-bold">
        Gesundes Essen für dich
      </h1>
      <input
        v-model="searchQuery"
        class="rounded-xl px-6 py-4 bg-[var(--neutral-800)] border border-[1px] focus:outline-none"
        type="text"
        @keydown.enter="searchByName(searchQuery)"
        placeholder="Hier suchen..."
      />
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 md:gap-10 md:p-10"
    >
      <ProductCard
        v-for="product in listings"
        :key="`${product.filename}+${product.title}`"
        :filename="product.filename"
        :title="product.title"
      />
    </div>
  </div>
</template>
