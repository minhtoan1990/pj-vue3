<template>
  <div>
    <h1>Fetching Data Commnets</h1>
    <h2>{{ getName() }} - {{ dataToan.count }}</h2>
    <button @:click="increment">Cộng</button>
    <button @:click="decrement">Trừ</button>
    <hr />
    <div>
      <button @click="showPopup">Mở popup</button>
      <Popup ref="refPopup">
        <h2>Tiêu đề popup</h2>
        <p>Nội dung popup</p>
      </Popup>
    </div>

    <h2>{{ getName() }}</h2>
    <div>
      <ul
        v-if="data.items.length"
        class="list-post"
      >
        <li
          v-for="item in data.items"
          :key="item.id"
        >
          <router-link :to="'comments/' + item.id">{{ item.id }} - {{ item.name }}</router-link>
        </li>
      </ul>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import useToan from "@/composable/useToan";
import Popup from "../Popup.vue";
import useGetData from "@/composable/useGetData";
import { useRouter } from "vue-router";

export default {
  components: {
    Popup,
  },

  setup() {
    const state = reactive({
      items: [],
      loading: true,
      error: null,
    });

    const refPopup = ref();

    const { getName, dataToan, increment, decrement } =
      useToan("List Comments: ");
    // get parame in URL
    const router = useRouter();
    console.log(router.meta);
    const apiUrl = router.currentRoute.value.path + "?_limit=100";
    // const apiUrl = "https://todo-app-vqdy.onrender.com/todos";

    const { data } = useGetData(apiUrl);

    function showPopup() {
      refPopup.value.show = true;
    }

    return {
      data,
      state,
      dataToan,
      getName,
      increment,
      decrement,
      showPopup,
      refPopup,
    };
  },
};
</script>

<style lang="scss">
.list-post {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
  li {
    padding: 0 10px;
    margin-bottom: 10px;
    a {
      text-decoration: none;
    }
  }
}
</style>
