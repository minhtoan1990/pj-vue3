// App.vue (component)

<template>
  <div>
    <h1>Plugin Format date</h1>
    <p v-formatDate="date" format="YYYY-MM-DD">2024-06-07</p>
    <p v-formatDate="date" format="DD/MM/YYYY">07/06/2024</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    
    setup() {
    const date = ref(new Date());


    return { date };
  },
};
</script>
