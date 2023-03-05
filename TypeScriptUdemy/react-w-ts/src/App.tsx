import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (newTodo: string) => {
    todos.push({ id: 't2', text: newTodo });
  };

  console.log(todos);

  return (
    <div className="App">
      <NewTodo onTodoAddHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
