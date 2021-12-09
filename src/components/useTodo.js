import { ref, computed } from 'vue';

export default function useTodo() {
  let title = ref("")
  let todos = ref(
    [
      {title: '学习 vue', done: false}
    ]
  )
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  let active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })

  let all = computed(() => todos.value.length)

  let allDone = computed({
    get() {
      return active.value === 0
    },
    set(value) {
      todos.value.forEach(todo => {
        todo.done = value
      })
    }
  })
  return {
    title,
    todos,
    active,
    addTodo,
    all,
    allDone
  }
}