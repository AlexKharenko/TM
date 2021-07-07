<template>
  <teleport to="#pop-up">
    <button
      class="btn btn-close-pop-up"
      @click="changeDeleteTaskPopUpStatus(false)"
    >
      Close
    </button>
    <div class="main-block">
      <h3 class="pop-up-question">Are you really want to delete this task?</h3>
      <div class="btn-line">
        <button class="btn btn-agree" @click="handleClick">Yes</button>
        <button
          class="btn btn-cancel"
          @click="changeDeleteTaskPopUpStatus(false)"
        >
          Cancel
        </button>
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
    ...mapGetters(["getTaskId"]),
  },
  methods: {
    ...mapActions(["changeDeleteTaskPopUpStatus", "removeTask"]),
    handleClick() {
      this.removeTask(this.getTaskId);
      this.changeDeleteTaskPopUpStatus(false);
    },
  },
};
</script>
