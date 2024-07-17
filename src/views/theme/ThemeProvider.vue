<template>
  <div :class="theme">
    <slot></slot>
  </div>
</template>
  
<script setup>
import { ref, provide } from "vue";

const theme = ref("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

provide("theme", theme);
provide("toggleTheme", toggleTheme);
</script>
  
<style scoped>
.light {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}
</style>
  