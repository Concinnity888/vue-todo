<template>
  <li class="todo-item">
    <label
      class="todo-item__task"
      v-bind:class="{done: todo.completed}"
    >
      <input
        class="todo-item__checkbox"
        type="checkbox"
        @change="updateTodoItem(todo)"
      >
      <span
        class="todo-item__icon"
        v-bind:class="{completed: todo.completed}"
      ></span>
      {{ todo.title }}
    </label>
    <button
      class="todo-item__btn-remove"
      type="button"
      @click="removeTodo(todo.id)"
    >
      Удалить
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeTodo', 'updateTodo']),
    updateTodoItem (todo) {
      todo.completed = !todo.completed
      this.updateTodo(todo)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;

  & .todo-item__task {
    position: relative;

    min-height: 40px;
    padding: 11px 16px;
    padding-left: 56px;

    text-align: left;
    word-break: break-all;

    cursor: pointer;
  }

  & .todo-item__checkbox {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0;
  }

  & .todo-item__icon {
    position: absolute;
    top: 0;
    left: 0;

    width: 40px;
    height: 40px;
    box-sizing: border-box;
    overflow: hidden;

    background-color: #ffffff;
    border: 2px solid #42b983;
    border-radius: 50%;

    &.completed {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0C8.95429 0 0 8.95429 0 20C0 31.0456 8.95429 39.9999 20 39.9999C31.0456 39.9999 39.9999 31.0456 39.9999 20C39.9882 8.95923 31.0408 0.0118024 20 0ZM31.01 13.8671L16.7242 28.1529C16.1663 28.7106 15.2621 28.7106 14.7043 28.1529L8.98995 22.4385C8.42243 21.8904 8.40669 20.9861 8.95479 20.4186C9.5029 19.851 10.4072 19.8353 10.9748 20.3834C10.9867 20.395 10.9984 20.4066 11.0099 20.4186L15.7142 25.1229L28.99 11.8471C29.5575 11.299 30.4619 11.3148 31.01 11.8822C31.5447 12.4358 31.5447 13.3135 31.01 13.8671Z' fill='%2342B983'/%3E%3C/svg%3E%0A");
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__btn-remove {
    display: block;
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    font-size: 0;

    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='24' viewBox='0 0 20 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.875 3H13.75V2.25C13.75 1.00734 12.7427 0 11.5 0H8.5C7.25734 0 6.25 1.00734 6.25 2.25V3H2.125C1.08948 3 0.25 3.83948 0.25 4.875V6.375C0.25 6.78923 0.585766 7.125 1 7.125H19C19.4142 7.125 19.75 6.78923 19.75 6.375V4.875C19.75 3.83948 18.9105 3 17.875 3ZM7.75 2.25C7.75 1.83656 8.08656 1.5 8.5 1.5H11.5C11.9134 1.5 12.25 1.83656 12.25 2.25V3H7.75V2.25Z' fill='%23CCCCCC'/%3E%3Cpath d='M1.67333 8.625C1.5395 8.625 1.43286 8.73684 1.43924 8.87053L2.05799 21.8569C2.11517 23.0587 3.10236 24 4.30517 24H15.6949C16.8977 24 17.8849 23.0587 17.9421 21.8569L18.5608 8.87053C18.5672 8.73684 18.4605 8.625 18.3267 8.625H1.67333ZM13 10.5C13 10.0856 13.3356 9.75 13.75 9.75C14.1644 9.75 14.5 10.0856 14.5 10.5V20.25C14.5 20.6644 14.1644 21 13.75 21C13.3356 21 13 20.6644 13 20.25V10.5ZM9.25002 10.5C9.25002 10.0856 9.58564 9.75 10 9.75C10.4144 9.75 10.75 10.0856 10.75 10.5V20.25C10.75 20.6644 10.4144 21 10 21C9.58564 21 9.25002 20.6644 9.25002 20.25V10.5ZM5.50002 10.5C5.50002 10.0856 5.83564 9.75 6.25002 9.75C6.66439 9.75 7.00002 10.0856 7.00002 10.5V20.25C7.00002 20.6644 6.66439 21 6.25002 21C5.83564 21 5.50002 20.6644 5.50002 20.25V10.5Z' fill='%23CCCCCC'/%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: no-repeat;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      opacity: 0.75;
      transition: all 0.25s ease;
    }
  }

  & .done {
    text-decoration: line-through;
  }
}
</style>
