import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos: (state) => state.todos
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo ({ commit }, id) {
      commit('REMOVE_TODO', id)
    },
    removeTodoAll ({ commit }) {
      commit('REMOVE_TODO_ALL')
    },
    updateTodo ({ commit }, todo) {
      commit('UPDATE_TODO', todo)
    }
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todos.push(todo)
    },
    REMOVE_TODO (state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    REMOVE_TODO_ALL (state) {
      state.todos = []
    },
    UPDATE_TODO (state, todo) {
      const idx = state.todos.findIndex((el) => el.id === todo.id)
      if (idx !== -1) {
        state.todos[idx] = todo
      }
    }
  },
  modules: {
  }
})
