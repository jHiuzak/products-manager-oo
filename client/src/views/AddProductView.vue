<template>
  <header>
    <page-header
      page-title="Product Add"
      blue-button-text="Save"
      red-button-text="Cancel"
      @blue-button-click="addProduct"
    />
  </header>

  <main>
    <form
      id="productForm"
      method="POST"
      action="#"
      class="col-12"
    >
      <!-- <form-input
        v-model="inputSku"
        label-text="SKU"
        input-name-and-id="sku"
        input-html-type="number"
      /> -->
      <form-input
        v-for="input in inputs"
        :key="input.inputNameAndId"
        v-model="input.model"
        :label-text="input.labelText"
        :input-name-and-id="input.inputNameAndId"
        :input-html-type="input.inputHtmlType"
      />
    </form>
  </main>
</template>

<script>
import { FormInput } from '../components/ProductAdd/';

export default {
  components: {
    FormInput,
  },
  data() {
    return {
      inputName: '',
      inputPrice: null,
      inputSku: '',
      inputs: [
        {
          inputHtmlType: 'text',
          inputNameAndId: 'sku',
          labelText: 'SKU',
          model: 'inputSku',
        },
        {
          inputHtmlType: 'number',
          inputNameAndId: 'price',
          labelText: 'Price',
          model: 'inputPrice',
        },
      ],
    };
  },
  methods: {
    addProduct() {
      console.log('It worked!');
    },
  },
};
</script>
