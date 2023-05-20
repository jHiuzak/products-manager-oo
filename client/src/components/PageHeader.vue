<template>
  <header class="col-12 d-flex align-items-center">
    <div :class="[sidesClasses, 'justify-content-start']">
      <h1>{{ title }}</h1>
    </div>
    <div :class="[sidesClasses, 'justify-content-end']">
      <a class="btn btn-outline-primary">
        {{ blueButtonText }}
      </a>
      <a
        id="mass-delete-btn"
        class="btn btn-outline-danger"
      >
        {{ redButtonText }}
      </a>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: 'true',
    },
    blueButtonText: {
      type: String,
      required: 'true',
    },
    redButtonText: {
      type: String,
      required: 'true',
    },
  },
  data() {
    return {
      sidesClasses: 'col-6 d-flex gap-2',
    };
  },
};
</script>
