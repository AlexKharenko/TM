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
      const card = document.getElementById(card_id);
      card.style.display = "block";

      this.editTaskStatus({ id: card_id, status: this.id });
      if (e.target.className === "msg") {
        e.target.parentElement.appendChild(card);
      }
      if (e.target.className === "board") {
        e.target.appendChild(card);
      }
    },
  },
};
</script>

<style lang="scss">
.board {
  height: 60vh;
  padding: 20px;
  margin: 20px;
  background: grey;
}
</style>