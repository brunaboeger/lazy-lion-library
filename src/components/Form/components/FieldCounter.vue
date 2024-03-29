<template>
  <div class="field-counter-container">
    <div class="field-counter">
        <p class="lazy">{{ value.length }} / {{ maxLength }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldCounter',

  props: {
    value: { type: Number, default: null },
    maxLength: { type: Number, default: null },
  },

  computed: {},

  methods: {},
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables.scss';

.field-counter-container {

  .field-counter {
    display: flex;
    align-items: center;
    height: $size;
    padding: 0 $spacing-fields;
  }
}
</style>