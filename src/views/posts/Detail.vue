<template>
    <div>
      <h1>Chi tiết</h1>
      <!-- Hiển thị thông tin chi tiết dựa trên ID từ tham số định tuyến -->
      {{ data.items.length }}
      <div v-if="data.items" class="detail-item">   
        {{ data.items.id }}     
        {{ data.items.title }}
      </div>
    </div>
  </template>
  
  <script>

  import useGetData from '@/composable/useGetData';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      // cách 1
      const router = useRouter();
      const apiUrl = router.currentRoute.value.path;
      const {data} = useGetData(apiUrl);
  
      return {
        data
      };
    }
  };
  </script>
  
  
  <style scoped>
  /* Thêm các quy tắc CSS cho trang chi tiết nếu cần */
  </style>
  