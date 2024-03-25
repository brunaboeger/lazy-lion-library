<template>
  <div class="lazy-field-container">
    <label for="">{{ label }}</label>
    <input type="text" :placeholder="placeholder" class="lazy-field">
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.lazy-field-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .lazy-field {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: .3rem;
  }
}
</style>