import React, { useState } from 'react';
import { Todo } from './todo.model';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (newTodo: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: newTodo },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onTodoAddHandler={todoAddHandler} />
      <TodoList items={todos} onTodoDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
