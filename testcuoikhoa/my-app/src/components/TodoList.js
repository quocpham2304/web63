import React, { createContext,useContext ,useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoContext = createContext({});

export function useTodo() {
    return useContext(TodoContext)
}

function TodoListProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo (todo)  {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  function updateTodo (todoId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  function removeTodo (id) {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  function completeTodo (id) {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      >{children}</Todo>
    </TodoContext.Provider>
  );
}

export default TodoListProvider;