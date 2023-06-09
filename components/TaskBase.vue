<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button class="btn-done" @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button class="btn-delete" @click="removeTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Array, default: () => [] },
  },
  methods: {
    toggleDone(task) {
      this.$store.commit('TOGGLE_TASK', this.task);
    },
    removeTask(task) {
      this.$store.commit('REMOVE_TASK', this.task);
    }
  }
}
</script>

<style>
.task {
  @apply flex items-center justify-between border border-slate-200 bg-gray-100 pl-3
}

.is-complete {
  @apply opacity-70
}

.is-complete .content {
  @apply line-through
}

.buttons {
  @apply flex
}

.btn-done {
  @apply text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm px-5 py-2.5
}

.btn-delete {
  @apply text-white bg-red-700 hover:bg-red-800 font-medium text-sm px-5 py-2.5
}
</style>
