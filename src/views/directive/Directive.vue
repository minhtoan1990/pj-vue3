
<template>
  <div>
    <!-- <input v-focus /> -->
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-focus
      v-model="textareaContent"
    />
    <p
      v-highlight="mess"
      :style="'color: black'"
    >{{ mess }}</p>
  </div>
</template>

<script setup>
import { vFocus } from "@/directives/vAutofocus";
import { vHighlight } from "@/directives/vHightlight";
const mess = "This is directives111";
</script>

<script>
export default {
  setup() {
    const textareaContent = ref("aaa"); // Initialize an empty string

    // ... other component logic
    return {
      textareaContent,
      // ... other component properties
    };
  },
};
</script>