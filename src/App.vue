<template>
  <div id="app">
    <main class="todo">
      <h1 class="todo__title">Todo List</h1>
      <Form />
      <TodoList />
      <ButtonRemoveAll v-if="allTodos.length" />
    </main>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import TodoList from '@/components/TodoList.vue'
import ButtonRemoveAll from '@/components/ButtonRemoveAll.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['allTodos'])
  },
  components: {
    Form,
    TodoList,
    ButtonRemoveAll
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #f6f6f6;
  color: #2c3e50;
}

.todo {
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  min-height: 500px;
  margin: 200px auto 0;

  background-color: #ffffff;

  &__title {
    margin: 0;
    padding: 16px 0;

    background-color: #42b983;
    color: #ffffff;
  }
}
</style>
