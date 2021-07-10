<template>
  <teleport to="#pop-up">
    <div class="pop-up">
      <div class="pop-up-window">
        <button
          class="btn btn-close-pop-up"
          @click="changeEditTaskPopUpStatus(false)"
        >
          <p>+</p>
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
            <p v-if="empty_name" class="error-msg">Should be not empty!</p>
          </div>
          <div class="input-block">
            <p class="form-field-title">Description</p>
            <textarea
              v-model="description"
              name="description"
              id="description"
              class="form-field form-field-description"
              placeholder="Enter the details"
              cols="30"
              rows="10"
            ></textarea>
            <p v-if="empty_desc" class="error-msg">Should be not empty!</p>
          </div>
          <button class="btn btn-submit" type="submit">Edit</button>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      task_name: "",
      description: "",
      empty_name: false,
      empty_desc: false,
    };
  },
  computed: {
    ...mapGetters(["popUpTaskCalledFrom", "getTaskId"]),
  },
  methods: {
    ...mapActions(["changeEditTaskPopUpStatus", "editTask"]),
    handleSubmit() {
      if (this.task_name.length === 0 && this.description.length === 0) {
        this.empty_name = true;
        this.empty_desc = true;
        return;
      }
      this.empty_name = false;
      this.empty_desc = false;
      if (this.task_name.length !== 0 && this.description.length === 0) {
        this.editTask({
          id: this.getTaskId,
          field: "task_name",
          field_value: this.task_name,
        });
      }
      if (this.task_name.length === 0 && this.description.length !== 0) {
        this.editTask({
          id: this.getTaskId,
          field: "description",
          field_value: this.description,
        });
      }
      if (this.task_name.length !== 0 && this.description.length !== 0) {
        this.editTask({
          id: this.getTaskId,
          field: "task_name",
          field_value: this.task_name,
        });
        this.editTask({
          id: this.getTaskId,
          field: "description",
          field_value: this.description,
        });
      }
      this.changeEditTaskPopUpStatus(false);
    },
  },
};
</script>
