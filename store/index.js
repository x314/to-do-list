export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
  },

  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },

  REMOVE_TASK_DONE(state, task) {
    const tasks = state.tasks.filter(item => !item.done)
    state.tasks = tasks
  },

  TOGGLE_TASK(state, task) {
    task.done = !task.done
  }
}

export const getters = {
  TASK_DONE(state) { return state.tasks.filter(item => item.done).length }
}
