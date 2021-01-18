<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in allTodos"
      v-bind:todo="todo"
      :key="todo.id"
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(['allTodos'])
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 0;
  margin-bottom: auto;
  padding: 0;

  list-style: none;
}
</style>
