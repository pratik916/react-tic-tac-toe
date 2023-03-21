import React, { useSyncExternalStore } from 'react'
import todoStore from './stores/todoStore'

function TodoApp() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getState);
  return (
    <div>
      TodoApp
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
      </ul>
      <button onClick={todoStore.addTodo}>Add Todo</button>
    </div>
  )
}

export default TodoApp
