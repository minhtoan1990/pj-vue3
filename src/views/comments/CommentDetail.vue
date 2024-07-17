<template>
  <Suspense>
    <template #default>
      <div>
        <h1>Comment Detail</h1>
        <h2>{{ getName() }} - {{ dataToan.count }}</h2>
        <!-- Hiển thị thông tin chi tiết dựa trên ID từ tham số định tuyến -->
        <div class="detail-item">
          <h2>{{ itemDetailComment.name }}</h2>
          <p>{{ itemDetailComment.body }}</p>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="loading">Đang tải dữ liệu...</div>
    </template>
  </Suspense>
</template>
<script>
import { reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import apiClient from "@/services/api.js";
import useToan from "@/composable/useToan";

export default {
  setup() {
    // cách 1

    // cách 2
    const vm = getCurrentInstance().appContext.config.globalProperties;
    const id = vm.$route.params.id;
    const { dataToan, getName } = useToan("Toàn Nè");

    const state = reactive({
      itemDetailComment: [],
      loading: true,
      error: null,
    });

    const fetchDataComment = async () => {
      try {
        const response = await apiClient.get(`/comments/` + id);
        if (!response.statusText) {
          throw new Error("Network response was not ok");
        }
        state.itemDetailComment = await response.data;
      } catch (error) {
        state.error = error.message;
        console.error("Error fetching data:", error);
      } finally {
        state.loading = false;
      }
    };

    onMounted(() => {
      fetchDataComment();
    });

    return {
      ...toRefs(state),
      dataToan,
      getName,
    };
  },
};
</script>

<style scoped>
/* Thêm các quy tắc CSS cho trang chi tiết nếu cần */
</style>
