<template>
  <div>
    <h1>Fetching Data Example</h1>
    <div class="list-posts">
      <ul v-if="data.items.length" class="list-post">
        <li v-for="item in data.items" :key="item.id">
          <router-link :to="'/posts/' + item.id">{{ item.id }} - {{ item.title }}</router-link>
        </li>
      </ul>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
  import useGetData from '@/composable/useGetData';

export default {
  setup() {

    const router = useRouter();
      const apiUrl = router.currentRoute.value.path + '?_limit=50';
      const {data}= useGetData(apiUrl);

    return { 
      data       
    };
  }
};
</script>

<style lang="scss">
    .list-post {
      margin: 0; 
      padding: 0;
      list-style: none;
      text-align: left;

      li {
        padding: 0 10px 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid;

      }
    }
</style>
