<!-- Please remove this file from your project -->
<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="title">TO DO LIST</h2>

    <div class="task-create">
      <input v-model="newTask" type="text" placeholder="Add a new task" class="w-full px-3" @keypress.enter="addTask" />
      <button class="btn-add" @click="addTask">Add</button>
    </div>

    <div class="my-3">
      <a class="badge">
        Tasks ({{ $store.state.tasks.length }})
      </a>
      <a class="badge">
        Done ({{ $store.getters['TASK_DONE'] }})
      </a>
      <button class="btn-clear-done" @click="removeTaskDone">
        Clear Done Tasks
      </button>
    </div>

    <div class="tasks w-full">
      <task-base v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    },
    removeTaskDone() {
      this.$store.commit('REMOVE_TASK_DONE')
    }
  }
}
</script>

<style>
.title {
  @apply mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl
}

.task-create {
  @apply flex items-center justify-between border border-slate-200
}

.btn-add {
  @apply text-white bg-green-700 hover:bg-green-800 font-medium text-sm px-5 py-2.5
}

.btn-clear-done {
  @apply text-white bg-red-700 hover:bg-red-800 font-medium text-sm px-5 py-2.5
}

.badge {
  @apply font-medium text-sm px-5 py-2.5
}
</style>
