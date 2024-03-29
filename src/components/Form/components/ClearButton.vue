<template>
  <div class="clear-button-container">
    <font-awesome icon="times" @click="$emit('clear')" fixed-width />
  </div>
</template>

<script>
export default {
  name: 'ClearButton',
  components: {},
  props: {},
  emits: 'clear',

  computed: {},

  methods: {},
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables.scss';

.clear-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: $size;
  height: $size;
  cursor: pointer;

  &:hover {
    background-color: $color-background--hover;
  }
}
</style>