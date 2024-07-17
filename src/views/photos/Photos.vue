<template>
  <div class="photos">
    <h1>{{ messPhotos }}</h1>
    <!-- <div v-if="data.loading == true">Loanding...</div>
        <div v-else>aaa</div> -->
    <div v-if="data.items.length">
      <ListPhotos :data="data" />
    </div>
    <div v-else> Loading photos...!! ^_^</div>
  </div>
</template>

<script>
import { ref } from "vue";
import useGetData from "@/composable/useGetData";
import ListPhotos from "@/components/photos/ListPhotos.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    ListPhotos,
  },
  setup() {
    const messPhotos = ref("List Photos");

    // get path in router
    const router = useRouter();
    console.log(router);
    const apiUrl = router.currentRoute.value.path + "?_limit=50";
    const { data } = useGetData(apiUrl);

    return {
      messPhotos,
      data,
    };
  },
};
</script>
<style lang="scss">
.photos {
  max-width: 1200px;
  margin: 0 auto;
}
</style>


  