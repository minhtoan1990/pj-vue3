<template>
  <div
    id="app"
    :style="{background: theme.primary}"
  >
    <ThemProvider>
      <Header />
      <div class="container">
        <router-view />
      </div>
      <Footer />
    </ThemProvider>
  </div>
  <Loading />
</template>


<script>
import Header from "./views/navbar/Header.vue";
import Footer from "./views/navbar/Footer.vue";
import Loading from "./views/Loading.vue";
import { provide } from "vue";
import ThemProvider from "@/views/theme/ThemeProvider.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ThemProvider,
    Loading,
  },
  setup() {
    const theme = {
      primary: "white",
      secondary: "black",
      currentTheme: "light",
    };

    provide("theme", theme);

    const toggleTheme = () => {
      theme.currentTheme = theme.currentTheme === "light" ? "dark" : "light";
      // Cập nhật thông tin theme được cung cấp
    };

    return {
      theme,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  min-height: 500px;
}
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
