<template>
  <teleport to="#pop-up">
    <button
      class="btn btn-close-pop-up"
      @click="changeAddTaskPopUpStatus(false)"
    >
      Close
    </button>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Task Name</p>
        <input
          v-model="task_name"
          class="form-field"
          type="text"
          name="task_name"
          placeholder="Enter task name"
        />
      </div>
      <div class="input-block">
        <p class="form-field-title">Description</p>
        <input
          v-model="description"
          class="form-field"
          type="text"
          name="description"
          placeholder="Enter the details"
        />
      </div>
      <button class="btn btn-submit" type="submit">Add</button>
    </form>
  </teleport>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      task_name: "",
      empty_name: false,
      description: "",
    };
  },
  computed: {
    ...mapGetters(["popUpTaskCalledFrom"]),
  },
  methods: {
    ...mapActions(["changeAddTaskPopUpStatus", "addTask"]),
    handleSubmit() {
      if (this.task_name.length === 0) {
        this.empty_name = true;
        return;
      }
      this.empty_name = false;
      const new_task = {
        task_name: this.task_name,
        description: this.description,
        status: this.popUpTaskCalledFrom,
        expire_date: null,
      };
      this.addTask(new_task);
      this.changeAddTaskPopUpStatus(false);
    },
  },
};
</script>
