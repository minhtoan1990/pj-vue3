<template>
    <div class="popup" v-if="show">
        <div class="popup-content">
        <slot></slot>
        <button @click="show = false">Đóng popup</button>
        </div>
    </div>
</template>
  
<script>
  import { ref } from 'vue'

  export default {
      setup(){
        const show = ref(false);
        return {
          show
        }
      }
    
  };
</script>
  
<style scope>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
</style>
  