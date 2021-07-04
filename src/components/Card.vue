<template>
  <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    {{task}}
  </div>
</template>

<script>
export default {
  props: ["id", "task", "draggable"],
  methods: {
    dragStart(e) {
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
    },
  },
};
</script>

<style lang="scss">
    .card{
        background: white;
    }
</style>