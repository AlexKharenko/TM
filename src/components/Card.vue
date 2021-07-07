<template>
  <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    {{ task }}
    <button @click="editTaskClick">edit</button>
    <button @click="removeTaskClick">del</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id", "task", "draggable"],
  methods: {
    ...mapActions([
      "changeEditTaskPopUpStatus",
      "changeDeleteTaskPopUpStatus",
      "changeTaskId",
      "changePopUpTaskCalledFrom",
    ]),
    dragStart(e) {
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
    },
    editTaskClick() {
      this.changeTaskId(this.id);
      this.changePopUpTaskCalledFrom(this.task.status);
      this.changeEditTaskPopUpStatus(true);
    },
    removeTaskClick() {
      this.changeTaskId(this.id);
      this.changeDeleteTaskPopUpStatus(true);
    },
  },
};
</script>

<style lang="scss">
.card {
  background: white;
}
</style>
