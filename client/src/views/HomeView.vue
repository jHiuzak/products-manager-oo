<template>
  <page-header
    title="Product List"
    blue-button-text="Add"
    red-button-text="Mass delete"
  />
  <main class="d-flex justify-content-center flex-wrap gap-3">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </main>
</template>

<script>
import { ProductCard } from '../components/Home';

export default {
  components: {
    ProductCard,
  },
};
</script>
