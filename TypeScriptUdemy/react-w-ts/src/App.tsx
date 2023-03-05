import React, { useState } from 'react';
import { Todo } from './todo.model';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (newTodo: string) => {
    setTodos([{ id: Math.random().toString(), text: newTodo }]);
  };

  return (
    <div className="App">
      <NewTodo onTodoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
