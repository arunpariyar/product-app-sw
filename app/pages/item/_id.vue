<script setup>
const route = useRoute();
console.log(route.params.id); // for /blog/123 → "123"
</script>
<template>
  <h2>{{ route.params.id }}</h2>
</template>
