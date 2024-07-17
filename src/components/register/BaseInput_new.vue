<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="inputValue"
      @input="onInput"
      :class="inputClass"
      :disabled="disabled"
    />
  </div>
</template>
  
  <script>
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value"],
  setup(props, { emit }) {
    const { value, type, placeholder, label, id, inputClass, disabled } =
      toRefs(props);

    const onInput = (event) => {
      emit("update:value", event.target.value);
    };

    return {
      value,
      type,
      placeholder,
      label,
      id,
      inputClass,
      disabled,
      onInput,
    };
  },
});
</script>
  
  <style scoped>
/* Thêm các CSS tùy chỉnh của bạn ở đây */
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
  