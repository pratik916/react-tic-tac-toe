let todos = [];
let nextId = 0;
let listeners = [];


const todoStore = {
  addTodo() {
    nextId++;
    todos = [...todos, {id:nextId, name: 'TODO #'+nextId}];
    dispatch();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  },
  getState() {
    return todos;
  }
};

function dispatch() {
  for (const listener of listeners) {
    listener();
  }
}

export default todoStore;
