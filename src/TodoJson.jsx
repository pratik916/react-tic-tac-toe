import React, { useSyncExternalStore } from 'react'
import todoStore from './stores/todoStore'

function TodoJson() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getState)
  return (
    <div>
      <pre>
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  )
}

export default TodoJson
