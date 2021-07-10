<template>
  <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    <div class="title">
      <div class="title-text">
        <p
          class="dot"
          :style="[
            task.task_color
              ? { background: task.task_color }
              : { background: 'black' },
          ]"
        ></p>
        <h3>{{ task.task_name }}</h3>
      </div>
      <div class="btn-block">
        <button class="btn btn-action" @click="editTaskClick">
          <img src="../assets/pen.png" alt="Edit" />
        </button>
        <button class="btn btn-action" @click="removeTaskClick">
          <img src="../assets/delete.png" alt="Delete" />
        </button>
      </div>
    </div>
    <div class="description">
      <p>{{ task.description }}</p>
    </div>
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
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 6px 2px #f3f3f3;
  margin: 20px 0;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-text {
      display: flex;
      align-items: center;
      .dot {
        margin-right: 10px;
        height: 4px;
        width: 4px;
        border-radius: 50%;
      }
      h3 {
        font-weight: 600;
        font-size: 18px;
        margin-right: 3px;
      }
    }
    .btn-block {
      display: flex;
      .btn-action {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        img {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
        }
      }
      .btn-action:first-child {
        margin-right: 5px;
      }
    }
  }
  .description {
    margin-top: 18px;
    p {
      color: #a7a7a7;
      font-size: 16px;
    }
  }
}
</style>
