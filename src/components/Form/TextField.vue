<template>
  <div class="lazy-text-field-container">
    <div v-if="label" class="text-field-label">
      <label class="lazy-label">{{ label }}</label>
    </div>

    {{ state.isError }}
    
    <div class="lazy-text-field" :class="[ fieldStyles, fieldStatus ]" @click="state.isActive">
      <font-awesome
        v-if="verifyIcon(icon)"
        class="text-field-icon"
        :icon="state.statusIcon ? state.statusIcon : icon"
        :class="state.statusIconClass"
      />
    
      <input
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :required="required"
      >

      <field-counter
        v-if="maxLength"
        :value="state.inputValue"
        :maxLength="maxLength"
      />

      <clear-button
        v-if="state.inputValue !== ''"
        @clear="clearValues"
      />
    </div>
    
    <helper-text
      v-if="helperText && inputValue !== ''"
      :helper-text="helperText"
    />
  </div>
</template>

<script>
import ClearButton from './components/ClearButton.vue';
import FieldCounter from './components/FieldCounter.vue';
import HelperText from './components/HelperText.vue';

export default {
  name: 'LazyTextField',

  components: {
    ClearButton,
    FieldCounter,
    HelperText,
  },

  props: {
    value: { 
      type: String, 
      default: '' 
    },

    label: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    helperText: {
      type: String
    },

    required: {
      type: Boolean,
      default: false,
    },

    maxLength: {
      type: Number,
      default: null,
    },

    icon: {
      type: String,
      default: '',
    },

    observations: {
      type: String,
      default: '',
    },
  },

  emits: ['validate'],

  data() {
    return {
      state: {
        inputValue: this.value,
        isError: false,
        isActive: false,
        isSelected: false,
        isDisabled: false,
        statusIcon: '',
        statusIconClass: '',
      }
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.state.inputValue;
      },
      set(value) {
        this.validateValue(value);
        this.state.inputValue = value;
        this.$emit('validate', this.state.inputValue);
      }
    },

    fieldStyles() {
      return {
        'is-error': this.state.isError,
        'is-active': this.state.isActive,
        'is-selected': this.state.isSelected,
        'is-disabled': this.state.isDisabled,
      }
    },
  },

  methods: {
    validateValue(value) {
      if (this.required && value === '') {
        this.state.isError = true;
        return false;
      } else {
        this.state.isError = false;
        return true;
      }
    },

    verifyIcon(icon) {
      if (icon && !this.observations && !this.state.isError) {
        this.state.statusIcon = this.icon;
        this.state.statusIconClass = '';
        return true;
      }
      if (this.observations && !this.state.isError) {
        icon = '';
        this.state.statusIcon = 'circle-question';
        this.state.statusIconClass = 'status-info';
        return true;
      }
      if (this.state.isError) {
        this.state.statusIcon = 'triangle-exclamation';
        this.state.statusIconClass = 'status-error';
        return true;
      }
    },

    clearValues() {
      if (this.required) {
        this.state.isError = true;
      }
      return this.state.inputValue = '';
    }
  },
}
</script>

<style scoped lang="scss">
.lazy-text-field-container {
  display: flex;
  flex-direction: column;
  position: relative;

  .text-field-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

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