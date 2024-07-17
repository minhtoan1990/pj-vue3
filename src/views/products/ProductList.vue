<template>
  <div class="product-listing">
    <h1>Danh sách sản phẩm</h1>
    <router-link :to="'add-new'">Add New</router-link>
    <ItemsCart />
    <table class="customers">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products.items"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button @click="handleDelete(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ItemsCart from "./ItemsCart.vue";
import router from "@/router";

export default {
  components: {
    ItemsCart,
  },
  setup() {
    const store = useStore();

    // const productStore = useStore("products"); // Assuming your store is named 'products'
    const fetchProducts = store.dispatch("fetchProducts");
    const products = computed(() => store.getters.listProducts);
    const isLogin = computed(() => store.getters.userLogin);

    const handleDelete = (producId) => {
      store.dispatch("removeProduct", { producId });
    };

    onMounted(() => {
      if (!isLogin.value) {
        router.push("/login");
      } else {
        fetchProducts;
      }
    });

    return {
      products,
      handleDelete,
    };
  },
};
</script>

<style lang="scss">
.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
}

.customers td,
.customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

.customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

.customers tr:hover {
  background-color: #ddd;
}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
