<template>
  This is Admin user
  <table class="customers">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in userAdmin.items"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.first_name }} {{ item.last_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.username }}</td>
          <td>
            <button @click="handleDelete(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const fetchUserAdmin = store.dispatch("getUserAdmin");
    const userAdmin = computed(() => store.getters.userAdmin);

    console.log("userAdmin: ", userAdmin);

    onMounted(() => {
        fetchUserAdmin;
    });

    const handleDelete = (id) => {
      store.dispatch("removeUserAdmin", { id });
    };

    return {
      userAdmin,
      handleDelete
    };
  },
};
</script>