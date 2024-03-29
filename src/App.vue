<template>
  <div class="container">
    <h1 class="lazy">Heading</h1>
    <lazy-text-field
      label="What's on your mind?"
      placeholder="Are you on the verge of the world?"
      helper-text="Tell me about you."
      max-length="14"
      icon="question"
    />
    <lazy-text-field
      label="What's on your mind?"
      placeholder="Only observations."
      :observations="observations"
    />
    <lazy-text-field
      label="What's on your mind?"
      placeholder="Icon and observations."
      icon="search"
      :observations="observations"
    />
    <lazy-text-field
      label="What's on your mind?"
      placeholder="Icon and observations."
      icon="search"
      required
    />
  </div>
</template>

<script>
  import LazyTextField from './components/Form/TextField.vue';

  export default {
    name: 'App',
    components: {
      LazyTextField,
    },
    data() {
      return {
        observations: 'This is a text field with no icon and no max length.',
      };
    },
  };
</script>

<style lang="scss">
@import 'src/assets/scss/variables.scss';

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;
  }
</style>