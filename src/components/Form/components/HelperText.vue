<template>
  <div class="helper-text-container">
    <small class="lazy">{{ helperText }}</small>
  </div>
</template>

<script>
export default {
  name: 'HelperText',
  
  props: {
    helperText: {
      type: String,
    },
  },

  computed: {},

  methods: {},
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables.scss';

.helper-text-container {
  .lazy-text-field-helper-text {
    padding: 0.75rem;
    background-color: white;
    position: absolute;
    right: 0;
    top: -1.5rem;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px 8px 0 8px;
  }
}
</style>