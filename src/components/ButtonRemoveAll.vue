<template>
  <button
    class="btn-remove-all"
    type="button"
    @click="removeTodoAll"
  >
    Удалить все задачи
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['removeTodoAll'])
  }
}
</script>

<style lang="scss" scoped>
.btn-remove-all {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 16px;
  padding: 0;

  font-size: 18px;
  text-transform: uppercase;

  background-color: #42b983;
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
</style>
