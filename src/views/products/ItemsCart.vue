<template>
  <div class="product-carts">
    <ul
      class="cart-items"
      v-if="cartItems.length"
    >
      <li
        class="cart-item"
        v-for="item in cartItems"
        :key="item.id"
      >
        <span>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</span>
        <input
          type="number"
          v-model="item.quantity"
          @change="updateItem(item.id, item.quantity)"
        />
        <button @click="removeItem(item.id)">Xóa</button>
      </li>
      <h2>Tổng: ${{ cartTotal }}</h2>
    </ul>
    <div v-else>Update data...</div>
    <AddItem />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AddItem from "./AddItem.vue";

export default {
  components: {
    AddItem,
  },
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.cartItems);
    const cartTotal = computed(() => store.getters.cartTotal);

    // const productStore = useStore("products"); // Assuming your store is named 'products'
    const removeItem = (productId) => {
      store.dispatch("removeFromCart", productId);
    };

    const updateItem = (productId, quantity) => {
      store.dispatch("updateCartItem", { productId, quantity });
    };

    return {
      cartItems,
      cartTotal,
      removeItem,
      updateItem,
    };
  },
};
</script>
<style lang="scss">
.product-carts {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  max-width: 350px;
  height: 100%;
  border: 1px solid #ccc;
  z-index: 2;
  background: #04aa6d;
  box-sizing: border-box;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    input {
      width: 130px;
      margin: 0 10px 10px 10px;
    }
  }
  .cart-item {
    margin: 0 0 15px;
    span,
    input,
    button {
      margin-right: 5px;
    }
  }
}
</style>
