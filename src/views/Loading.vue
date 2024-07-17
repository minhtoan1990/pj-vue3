<template>
  <div
    class="loading"
    v-if="isLoadingIn"
  >
    Waiting....!^_^
  </div>
</template>
  
  
  <script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Loading",

  setup() {
    const store = useStore();

    const isLoadingIn = computed(() => store.getters.getIsLoading);

    return {
      isLoadingIn,
    };
  },
};
</script>
  
  <style>
#app {
  position: relative; /* Cần thiết cho fixed positioning */
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Nền mờ */
  z-index: 9999; /* Đảm bảo loading hiển thị trên tất cả nội dung */
  display: flex; /* Cho phép canh giữa content loading */
  justify-content: center; /* Canh giữa theo chiều ngang */
  align-items: center; /* Canh giữa theo chiều dọc */
}

.loading img,
.loading .loading-animation {
  /* Selector cho loading image hoặc animation */
  width: 100px;
  height: 100px;
}

.loading.hidden {
  /* Class để ẩn loading */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
</style>
  