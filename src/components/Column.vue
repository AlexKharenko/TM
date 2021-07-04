<template>
  <div class="column">
    <div class="top-column-bar">
      <h3>{{ col_name }}</h3>
      <p class="task-number">0</p>
    </div>
    <div class="btn btn-add" @click="AddTaskClick()">+</div>
    <Board :id="id" :list="list">
      <Card
        v-for="task in list"
        :id="task.id"
        :key="task.id"
        :task="task"
        draggable="true"
      />
    </Board>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Board from "@/components/Board.vue";
import Card from "@/components/Card.vue";

export default {
  props: ["id", "col_name", "list"],
  components: {
    Board,
    Card,
  },
  methods: {
    ...mapActions([
      "removeTask",
      "changeAddTaskCalledFrom",
      "changeAddTaskPopUpStatus",
    ]),
    AddTaskClick() {
      console.log(this.id)
      this.changeAddTaskCalledFrom(this.id);
      this.changeAddTaskPopUpStatus(true);
    },
  },
};
</script>
