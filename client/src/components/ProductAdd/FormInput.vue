<template>
  <div :class="labelWrapperClass">
    <label
      :for="inputNameAndId"
      :class="labelClass"
    >
      {{ labelText }}
    </label>
    <div :class="inputWrapperClass">
      <input
        :id="inputNameAndId"
        required="true"
        :type="inputHtmlType"
        :class="inputClass"
        :name="inputNameAndId"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputHtmlType: {
      required: true,
      type: String,
    },
    inputNameAndId: {
      required: true,
      type: String,
    },
    labelText: {
      required: true,
      type: String,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  data() {
    return {
      inputClass: 'form-control',
      inputWrapperClass: 'col-4',
      labelClass: 'col-2 col-form-label fw-bold',
      labelWrapperClass: 'row mb-3',
      // inputValue: '',
    };
  },
};
</script>
