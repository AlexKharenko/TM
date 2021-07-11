<template>
  <teleport to="#pop-up">
    <div class="pop-up">
      <div class="pop-up-window">
        <div class="main-block">
          <h3 class="pop-up-question">
            Are you really want to delete this task?
          </h3>
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

<style lang="scss" scoped>
.main-block {
  position: relative;
  .btn-line {
    text-align: center;
    margin-top: 10px;
    button {
      width: 70px;
      font-size: 16px;
      border-radius: 3px;
      border: none;
    }
    .btn-agree {
      background: red;
      color: white;
      margin-right: 5px;
    }
    .btn-cancel {
      background: white;
    }
    .btn-agree:hover {
      background: rgb(204, 38, 38);
    }
    .btn-cancel:hover {
      background: rgb(226, 226, 226);
    }
  }
}
</style>
