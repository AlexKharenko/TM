<template>
  <div class="column">
    <div class="top-column-bar">
      <h3>{{ col_name }}</h3>
      <div class="task-number">
        <p>{{ list.length }}</p>
      </div>
    </div>
    <div class="btn btn-margin btn-add" @click="AddTaskClick()">+</div>
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
      "changePopUpTaskCalledFrom",
      "changeAddTaskPopUpStatus",
    ]),
    AddTaskClick() {
      this.changePopUpTaskCalledFrom(this.id);
      this.changeAddTaskPopUpStatus(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.column {
  height: 100%;
  padding: 15px 30px;
  border-radius: 20px;
  background: #f5f9fa;
  .top-column-bar {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    h3 {
      font-size: 16px;
    }
    .task-number {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: #f0f7f7;
      p {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: #7ebaaf;
      }
    }
  }
  .btn-add {
    text-align: center;
    background: var(--button-color);
    color: var(--plus-color);
    border-radius: 10px;
    font-size: 24px;
  }
  .btn-add:hover {
    background: var(--button-color-hover);
  }
}
</style>
