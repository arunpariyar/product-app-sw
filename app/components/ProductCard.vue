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
    <div class="flex flex-col py-5 gap-3">
      <p class="text-s text-center">{{ title }}</p>
      <button
        class="rounded-[10px] cursor-pointer bg-[var(--blue-500)] px-3 px-3 text-[18px]"
      >
        view
      </button>
    </div>
  </div>
</template>
