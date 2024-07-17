<template>
  <div class="form-login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="userName">User Name:</label>
        <input
          v-model="userName"
          type="userName"
          id="userName"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          required
        />
      </div>
      <button type="submit">{{ isLoadingIn ? 'Loadding' : 'Login' }}</button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const userName = ref("");
    const password = ref("");
    const store = useStore();

    const isLoadingIn = computed(() => store.getters.getIsLoading);
    console.log(userName);
    // Login with Vuex
    const handleLogin = async () => {
      // await store.login(userName.value, password.value);
      store.dispatch("login", {
        username: userName.value,
        password: password.value,
      });
    };

    return {
      userName,
      password,
      handleLogin,
      isLoadingIn,
    };
  },
};
</script>

<style lang="scss">
.form-login {
  label {
    position: relative;
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 32px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    margin-right: 10px;
    min-width: 100px;
    margin-bottom: 10px;
  }

  input {
    box-sizing: border-box;
    margin: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;
  }

  button {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: #fff;
    background-color: #4096ff;
  }
}
</style>
