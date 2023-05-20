<template>
  <div :class="labelWrapperClass">
    <label
      :for="inputNameAndId"
      :class="labelClass"
    >
      <slot></slot>
    </label>
    <div :class="inputWrapperClass">
      <input
        :id="inputNameAndId"
        v-model="inputValue"
        required="true"
        :type="inputHtmlType"
        :class="inputClass"
        :name="inputNameAndId"
      />
    </div>
    <h6>{{ inputValue }}</h6>
  </div>
</template>

<script>
export default {
  props: {
    inputNameAndId: {
      type: String,
      required: true,
    },
    inputHtmlType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelWrapperClass: 'row mb-3',
      labelClass: 'col-2 col-form-label fw-bold',
      inputWrapperClass: 'col-4',
      inputClass: 'form-control',
      inputValue: '',
    };
  },
};
</script>
