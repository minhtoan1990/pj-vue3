<template>
  <div>
    <div class="profile-title">
      <h1>This is Profile</h1>
      <button @click="handleLogout">Logout</button>
    </div>
    <div class="user-profile">
      <h2>Name: {{ user.first_name }} {{ user.last_name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Role: {{ user.role }}</p>
      <p>Phone: {{user.phone_number}}</p>
      <p>Active: {{user.is_active}}</p>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Profile",
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.profileUser);

    const handleLogout = () => {
      store.dispatch("logout");
    };

    return {
      user,
      handleLogout,
    };
  },
};
</script>

<style lang="scss">
.user-profile {
  max-width: 500px;
  box-shadow: inset;
  margin: 0 auto;
  width: 100%;
  border: 1px solid;
  padding: 30px 20px 20px;
  border-radius: 5px;
  display: block;
  text-align: left;
}

.profile-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
