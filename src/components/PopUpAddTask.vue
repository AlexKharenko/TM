<template>
  <teleport to="#pop-up">
    <div class="pop-up">
      <div class="pop-up-window">
        <button
          class="btn btn-close-pop-up"
          @click="changeAddTaskPopUpStatus(false)"
        >
          <p>+</p>
        </button>
        <form @submit.prevent="handleSubmit">
          <div class="input-block">
            <p class="form-field-title">Title</p>
            <input
              v-model="task_name"
              @input="empty_name = false"
              class="form-field"
              type="text"
              name="task_name"
              placeholder="Enter task name"
            />
            <div class="error-msg" v-if="empty_name">Title should be!</div>
          </div>
          <div class="input-block">
            <p class="form-field-title">Description</p>
            <textarea
              v-model="description"
              name="description"
              id="description"
              class="form-field form-field-description"
              placeholder="Enter the details"
            ></textarea>
          </div>
          <div class="input-block">
            <p class="form-field-title">Task Color</p>
            <input
              v-model="task_color"
              class="form-field"
              type="color"
              name="task_color"
            />
          </div>
          <button class="btn btn-submit" type="submit">Add</button>
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
      empty_name: false,
      description: "",
      task_color: "black",
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
        task_color: this.task_color,
      };
      this.addTask(new_task);
      this.changeAddTaskPopUpStatus(false);
    },
  },
};
</script>
