<template>
  <div class="column">
    <h2>{{ column.title }}</h2>
    <draggable-list v-model="column.tasks">
      <draggable-item
        v-for="(task, index) in column.tasks"
        :key="index"
      >
        <task :task="task" />
      </draggable-item>
    </draggable-list>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";
import { DraggableList, DraggableItem } from "v-draggable";
import Task from "./Task.vue";

export default defineComponent({
  components: {
    DraggableList,
    DraggableItem,
    Task,
  },
  props: {
    column: Object,
  },
});
</script>
  
  <style scoped>
.column {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
  