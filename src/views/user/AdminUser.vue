<template>
  This is Admin user
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const userAdmin = computed(() => store.getters.userAdmin);

    console.log("userAdmin: ", userAdmin);
    return {
      userAdmin,
    };
  },
};
</script>