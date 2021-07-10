<template>
  <div :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <h3 class="msg" v-if="list.length === 0">No tasks found</h3>
    <slot />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["id", "list"],
  methods: {
    ...mapActions(["editTaskStatus"]),
    drop(e) {
      const card_id = e.dataTransfer.getData("card_id");

      this.editTaskStatus({ id: card_id, status: this.id });
    },
  },
};
</script>

<style lang="scss">
.board {
  height: 60vh;
}
</style>
