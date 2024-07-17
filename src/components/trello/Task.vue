<template>
  <div class="task">
    {{ task.title }}
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    task: Object,
  },
});
</script>
  
  <style scoped>
.task {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>
  