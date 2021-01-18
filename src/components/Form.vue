<template>
  <form
    class="todo-form"
    @submit.prevent="addTodoItem"
  >
    <input
      type="text"
      placeholder="Введите текст задачи..."
      v-bind:value="todoText"
      @input="changeTodoText"
    />
    <button class="todo-form__btn-add" type="submit">Добавить</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    todoText: ''
  }),
  methods: {
    ...mapActions(['addTodo']),
    changeTodoText (evt) {
      this.todoText = evt.target.value
    },
    addTodoItem () {
      if (this.todoText.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.todoText,
          completed: false
        }

        this.addTodo(newTodo)
        this.todoText = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-form {
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;

  border-bottom: 1px solid #cccccc;

  & input {
    display: inline-flex;
    align-items: center;
    flex-grow: 1;
    height: 74px;
    padding: 16px;
    padding-left: 0;
    box-sizing: border-box;

    color: #2c3e50;
    font-size: 16px;
    line-height: 74px;
    vertical-align: middle;

    border: none;
    outline: none;
  }

  .todo-form__btn-add {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    box-sizing: border-box;

    font-size: 0;

    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M22.7999 10.8H13.2001V1.19993C13.2001 0.537671 12.6624 0 11.9999 0C11.3377 0 10.8 0.537671 10.8 1.19993V10.8H1.19993C0.537671 10.8 0 11.3377 0 11.9999C0 12.6624 0.537671 13.2001 1.19993 13.2001H10.8V22.7999C10.8 23.4624 11.3377 24.0001 11.9999 24.0001C12.6624 24.0001 13.2001 23.4624 13.2001 22.7999V13.2001H22.7999C23.4624 13.2001 24.0001 12.6624 24.0001 11.9999C24.0001 11.3377 23.4624 10.8 22.7999 10.8V10.8Z' fill='%23CCCCCC'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.25s ease;

    &:hover {
      opacity: 0.75;
      transition: all 0.25s ease;
    }
  }
}
</style>
