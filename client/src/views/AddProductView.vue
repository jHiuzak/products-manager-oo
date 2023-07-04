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
      <form-input-style
        label-for-attr="sku"
        label-text="SKU"
      >
        <input
          id="sku"
          v-model="formData.sku"
          class="form-control"
          name="sku"
        />
        <p
          v-for="error in v$.formData.sku.$errors"
          :key="error.uid"
          class="text-danger"
          role="alert"
        >
          {{ error.$message }}
        </p>
      </form-input-style>

      <form-input-style
        label-for-attr="name"
        label-text="Name"
      >
        <input
          id="name"
          v-model="formData.name"
          class="form-control"
          name="name"
        />
        <p
          v-for="error in v$.formData.name.$errors"
          :key="error.uid"
          class="text-danger"
          role="alert"
        >
          {{ error.$message }}
        </p>
      </form-input-style>

      <form-input-style
        label-for-attr="price"
        label-text="Price"
      >
        <input
          id="price"
          v-model="formData.price"
          class="form-control"
          name="price"
        />
        <p
          v-for="error in v$.formData.price.$errors"
          :key="error.uid"
          class="text-danger"
          role="alert"
        >
          {{ error.$message }}
        </p>
      </form-input-style>
    </form>
  </main>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, numeric } from '@vuelidate/validators';
import { FormInputStyle } from '../components/ProductAdd';

// const isTypeValid = (value, vueRef) => {
//   vueRef.checkValidity();
// };

export default {
  components: {
    FormInputStyle,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        sku: '',
        name: '',
        price: null,
      },
    };
  },
  methods: {
    addProduct() {
      console.log('Product added.');
    },
    cancel() {
      console.log('Canceled.');
    },
    invalidFunction() {
      console.log('Invalid');
    },
  },
  validationConfig() {
    return {
      $autoDirty: true,
      $lazy: true,
      $rewardEarly: true,
    };
  },
  validations() {
    return {
      formData: {
        sku: {
          $autoDirty: true,
          required,
          // numeric: helpers.withMessage(
          //   'Please provide the indicated data type.',
          // ),
        },
        name: {
          $autoDirty: true,
          required,
          // numeric: helpers.withMessage(
          //   'Please provide the indicated data type.',
          // ),
        },
        price: {
          $autoDirty: true,
          required,
          numeric: helpers.withMessage(
            'Please provide the indicated data type.',
            numeric,
          ),
        },
      },
    };
  },
};
</script>
