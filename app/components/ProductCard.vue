<script setup lang="ts">
import { getImageName } from "#imports";
interface ProductCardProps {
  filename: string;
  title: string;
}

const props = defineProps<ProductCardProps>();
</script>

<template>
  <div>
    <div class="w-full h-64 overflow-hidden rounded-[12px]">
      <NuxtImg
        :src="getImageName(props.filename)"
        class="w-full h-full bg-center"
        :style="{ objectFit: 'cover' }"
      />
    </div>
    <div class="flex justify-between py-5">
      <p>{{ title }}</p>
      <button>More</button>
    </div>
  </div>
</template>
