<template>
  <div :class="wrapperClass">
    <label
      :class="labelClass"
      :for="nameAndId"
    >
      {{ label }}
    </label>
    <div :class="inputWrapperClass">
      <input
        v-if="!customInput"
        :id="nameAndId"
        required
        :class="inputClass"
        :name="nameAndId"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <slot name="customInput"></slot>
    </div>
  </div>
</template>

<script>
// pattern="^\+?[0-9]*\.?[0-9]+$"
export default {
  props: {
    nameAndId: {
      required: true,
      type: String,
    },
    label: {
      default: '',
      required: true,
      type: String,
    },
    modelValue: {
      type: String,
      default: '',
    },
    customInput: {
      type: Boolean,
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
      wrapperClass: 'row mb-3',
    };
  },
};
</script>
