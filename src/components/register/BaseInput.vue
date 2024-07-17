<template>
  <div class="wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      {{ internalValue}};
      <p
        class="error"
        v-if="error"
        :style="{ display: 'block' }"
      >{{ error }}</p>
    </div>
    <input
      :id="name"
      :type="type"
      :value="internalValue"
      @input="handleInput"
    />
  </div>
</template>
  
  <script>
import { ref, computed } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: Object, // min and required
      default: () => ({}), // Provide an empty default to avoid potential errors
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text", // Set a default type
    },
  },

  setup(props, { emit }) {
    const internalValue = ref(props.value); // Use ref for reactive state

    const error = computed(() => validate(internalValue.value, props.rules));

    const handleInput = (event) => {
      internalValue.value = event.target.value;
      console.log(event.target.value);
      emit("update", {
        value: internalValue.value,
        name: props.name,
        valid: !error.value,
      });
    };

    const validate = (value, rules) => {
      if (rules.required && !value) {
        return "Required";
      }

      if (rules.min && value.length < rules.min) {
        return `Minimum length of ${rules.min}`;
      }

      return null;
    };

    return {
      internalValue,
      error,
      handleInput,
    };
  },
};
</script>
  
  <style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.error {
  color: red;
  font-weight: bold;
  margin: 0;
}
input {
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 5px;
  font-size: 16px;
}
</style>
  