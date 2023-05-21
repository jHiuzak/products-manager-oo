<template>
  <header>
    <page-header
      page-title="Product Add"
      blue-button-text="Save"
      red-button-text="Cancel"
      @blue-button-click="addProduct"
      @red-button-click="cancel"
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
        v-model="inputSku"
        label-text="SKU"
        input-name-and-id="sku"
        input-html-type="text"
      />
      <form-input
        v-model="inputName"
        label-text="Name"
        input-name-and-id="name"
        input-html-type="text"
      />
      <form-input
        v-model="inputPrice"
        label-text="Price ($)"
        input-name-and-id="price"
        input-html-type="number"
      />
      <form-input
        v-model="inputType"
        label-text="Type Switcher"
        not-typing-field
      >
        <template #selectSlot>
          <select
            id=""
            v-model="productType"
            value=""
            name=""
            class="col-4 form-select"
          >
            <option value="BookAttribute">Book</option>
          </select>
        </template>
      </form-input>

      <KeepAlive>
        <component :is="productType"></component>
      </KeepAlive>
    </form>
  </main>
</template>

<script>
import { FormInput, BookAttribute } from '../components/ProductAdd/';

export default {
  components: {
    FormInput,
    BookAttribute,
  },
  data() {
    return {
      inputName: '',
      inputPrice: null,
      inputSku: '',
      inputType: '',
      productType: '',
    };
  },
  computed: {},
  methods: {
    addProduct() {
      console.log('Product added.');
    },
    cancel() {
      console.log('Canceled.');
    },
    // switchType(attributeComponent) {
    //   this.productType = attributeComponent;
    // },
  },
};
</script>
