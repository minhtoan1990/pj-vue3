<template>
  <keep-alive>
    <div class="form-cart">
      <form @submit.prevent="addItem">
        <div class="cart-item">
          <label for="name">Name: </label
          ><input :placeholder="'Enter name'" v-model="name" id="name" type="name" />
        </div>
        <div class="cart-item">
          <label for="price">Price: </label
          ><input :placeholder="'Enter Price'" v-model="price" id="price" type="price" />
        </div>
        <div class="cart-item">
          <label for="quantity">Quantity: </label
          ><input
            :placeholder="'Enter Quantity'"
            v-model="quantity"
            id="quantity"
            type="quantity"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </keep-alive>
</template>

<script>
import { ref } from "vue";

import { useStore } from "vuex";

export default {
  setup() {
    const name = ref("");
    const price = ref("");
    const quantity = ref("");

    const store = useStore();

    const addItem = () => {
      const product = {
        id: new Date().toISOString(),
        name: name.value,
        price: price.value,
        quantity: quantity.value,
      };

      store.dispatch("addToCart", product);
    };

    return {
      addItem,
      name,
      price,
      quantity,
    };
  },
};
</script>

<style lang="scss">
.form-cart {
  margin-top: 20px;
  .cart-item {
    margin-bottom: 10px;
    label {
      min-width: 100px;
      display: inline-block;
    }
  }
}
</style>
