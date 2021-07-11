<template>
  <div class="wrapper">
    <h1>Projects</h1>
    <div class="main-container">
      <Column id="todo" col_name="To Do" :list="getTodoList" />
      <Column id="in_pro" col_name="In Progress" :list="getInProList" />
      <Column id="comp" col_name="Completed" :list="getCompList" />
    </div>
  </div>

  <PopUpAddTask v-if="isAddTaskPopUpActive" />
  <PopUpEditTask v-if="isEditTaskPopUpActive" />
  <PopUpDeleteTask v-if="isDeleteTaskPopUpActive" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Column from "./components/Column.vue";
import PopUpAddTask from "./components/PopUpAddTask.vue";
import PopUpEditTask from "./components/PopUpEditTask.vue";
import PopUpDeleteTask from "./components/PopUpDeleteTask.vue";

export default {
  name: "App",
  components: {
    Column,
    PopUpAddTask,
    PopUpEditTask,
    PopUpDeleteTask,
  },
  methods: {
    ...mapActions(["loadTasks"]),
  },
  computed: {
    ...mapGetters([
      "getTodoList",
      "getInProList",
      "getCompList",
      "isAddTaskPopUpActive",
      "isEditTaskPopUpActive",
      "isDeleteTaskPopUpActive",
    ]),
  },
  mounted() {
    this.loadTasks();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --button-color: #e8f2f1;
  --button-color-hover: #dae2e1;
  --plus-color: #53aa9c;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .wrapper {
    margin: 20px 40px;
    h1 {
      margin: 0 50px;
    }
    .main-container {
      min-height: 85vh;
      margin: 10px;
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(143px, 1fr));
      grid-gap: 20px;
    }
  }
}

.btn {
  border: none;
  outline: none;
  padding: 10px 10px;
  cursor: pointer;
}
.btn-margin {
  margin: 15px 0;
}

.pop-up {
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: rgba($color: #808080, $alpha: 0.5);
  position: fixed;
  top: 0;
  left: 0;
  .pop-up-window {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    padding: 15px 20px;
    border-radius: 5px;
    max-width: 300px;
    max-height: 400px;
    background: rgba($color: #808080, $alpha: 0.9);
    .btn-close-pop-up {
      float: right;
      height: 24px;
      width: 24px;
      background: var(--button-color);
      border: none;
      line-height: 0;
      padding: 0;
      p {
        transform: rotateZ(45deg);
        font-size: 24px;
        color: var(--plus-color);
      }
    }
    .btn-close-pop-up:hover {
      background: var(--button-color-hover);
    }
    .input-block {
      margin-bottom: 7px;
      .form-field-title {
        font-size: 16px;
        margin-bottom: 3px;
      }
      .form-field {
        outline: none;
        border: none;
        padding: 5px;
        border-radius: 3px;
        width: 70%;
      }
      .form-field-description {
        height: 100px;
        overflow-y: scroll;
        margin: 0;
        resize: none;
      }
      .error-msg {
        font-size: 14px;
        color: rgb(133, 23, 23);
        margin-top: 3px;
      }
    }
    .btn-submit {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px;
      margin-top: 5px;
      width: 50px;
      border: none;
      border-radius: 3px;
      background: var(--button-color);
      color: var(--plus-color);
    }
    .btn-submit:hover {
      background: var(--button-color-hover);
    }
  }
}
</style>
