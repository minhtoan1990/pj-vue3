<template>
  <div class="product-add">
    <h1>Add New {{ isLogin }}</h1>
    <form
      class="form-new"
      @submit.prevent="handleForm"
    >
      <div>
        <label for="title">Title:</label>
        <input
          v-model="title"
          type="title"
          id="title"
          required
        />
      </div>
      <div>
        <label for="priority">Priority:</label>
        <input
          v-model="priority"
          type="number"
          id="priority"
          required
        />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea
          v-model="description"
          type="description"
          id="description"
          required
        />
      </div>

      <button type="submit">Add New</button>
    </form>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const priority = ref();

    const store = useStore();
    const isLogin = computed(() => store.getters.userLogin);

    onMounted(() => {
      if (!isLogin.value) {
        router.push("/login");
      }
    });

    const handleForm = async () => {
      const data = {
        title: title.value,
        description: description.value,
        priority: priority.value,
        complete: false,
      };
      store.dispatch("addProduct", data);
    };

    return {
      title,
      description,
      priority,
      handleForm,
      isLogin,
    };
  },
};
</script>

<style lang="scss">
.form-new {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  max-width: 400px;
  margin: 10px auto;

  input,
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    label {
      margin-bottom: 5px;
    }
  }
}
</style>
