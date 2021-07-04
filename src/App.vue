<template>
  <Column id="todo" col_name="To Do" :list="getTodoList" />
  <Column id="in_pro" col_name="In Progress" :list="getInProList" />
  <Column id="comp" col_name="Completed" :list="getCompList" />

  <PopUpAddTask v-if="isAddTaskPopUpActive" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Column from "./components/Column.vue";
import PopUpAddTask from "./components/PopUpAddTask.vue";

export default {
  name: "App",
  components: {
    Column,
    PopUpAddTask,
  },
  methods:{
    ...mapActions(["loadTasks"]),
  },
  computed: {
    ...mapGetters([
      "getTodoList",
      "getInProList",
      "getCompList",
      "isAddTaskPopUpActive",
    ]),
  },
  mounted(){
    this.loadTasks();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
