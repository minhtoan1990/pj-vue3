<template>
  <div class="header">
    <div class="nav-top">
      <img
        @click="onClickLogo"
        class="logo"
        alt="Vue logo"
        src="../../assets/logo.svg"
      />
    </div>
    <ul class="nav">
      <li
        v-for="item in dataHeader.navItem"
        :key="item.page"
      >
        <router-link
          :to="item.path"
          v-if="showRouteLink"
        >{{ item.page }}</router-link>
      </li>
    </ul>
    <div class="nav-bottom">
      <button @:click="toggleTheme">{{ theme }}</button>
      <router-link
        :class="'nav-register'"
        :to="'/register'"
      >Register</router-link>
      <div v-if="isLogin">
        <router-link :to="'user/profile'">Profile</router-link>
      </div>
      <div v-else>
        <router-link :to="'login'">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { reactive, computed, watchEffect } from "vue";
import "@/style/HeaderStyle.scss";
import { inject } from "vue";
import { useStore } from "vuex";

export default {
  name: "Header",
  setup() {
    const dataHeader = reactive({
      navItem: [
        { path: "/", page: "Home", show: true },
        // { path: "/about", page: "About", show: true },
        { path: "/trello", page: "Trello Board", show: true },
        { path: "/comments", page: "Comments", show: true },
        { path: "/posts", page: "Posts", show: true },
        { path: "/photos", page: "Photos", show: true },
        // { path: "/directive", page: "Directive" },
        // { path: "/plugin", page: "Plugin" },
        { path: "/shop-list", page: "Product" },
      ],
    });

    const showRouteLink = true;
    function onClickLogo() {
      router.push("/");
    }

    const theme = inject("theme");

    const toggleTheme = inject("toggleTheme");

    const store = useStore();
    const isLogin = computed(() => store.getters.userLogin);

    // watchEffect(() => {
    //   store.getters.userLogin;
    // });

    return {
      dataHeader,
      onClickLogo,
      theme,
      toggleTheme,
      showRouteLink,
      isLogin,
    };
  },
};
</script>

<style lang="scss">
.nav-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-register {
    margin: 0 10px;
  }
}
</style>
