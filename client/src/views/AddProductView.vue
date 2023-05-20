<template>
  <header>
    <page-header
      title="Product Add"
      blue-button-text="Save"
      red-button-text="Cancel"
    />
  </header>

  <main>
    <form
      id="productForm"
      method="POST"
      action="#"
      class="col-12"
    >
      <form-input
        input-name-and-id="sku"
        input-html-type="text"
        >SKU</form-input
      >
      <form-input
        input-name-and-id="price"
        input-html-type="number"
        >Price</form-input
      >
    </form>
  </main>
</template>

<script>
import { FormInput } from '../components/ProductAdd/';

export default {
  components: {
    FormInput,
  },
};
</script>
