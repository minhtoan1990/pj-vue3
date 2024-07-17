<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <WelcomeItem />
  </div>
</template>

<script>
import { ref } from "vue";
import WelcomeItem from "@/components/WelcomeItem.vue";

export default {
  components: {
    WelcomeItem,
  },
  setup() {
    const message = ref("Welcome to Your Vue.js App");

    return {
      message,
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
