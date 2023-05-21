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
        v-if="!notTypingField"
        :id="inputNameAndId"
        required="true"
        :type="inputHtmlType"
        :class="inputClass"
        :name="inputNameAndId"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <slot name="selectSlot"></slot>
    </div>
  </div>
</template>

<script>
// pattern="^\+?[0-9]*\.?[0-9]+$"
export default {
  props: {
    inputHtmlType: {
      // required: true,
      type: String,
    },
    inputNameAndId: {
      // required: true,
      type: String,
    },
    labelText: {
      required: true,
      type: String,
    },
    notTypingField: {
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
      labelWrapperClass: 'row mb-3',
      // inputValue: '',
    };
  },
};
</script>
