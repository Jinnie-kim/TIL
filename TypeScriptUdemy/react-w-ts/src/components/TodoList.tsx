import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
  onTodoDelete: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            type="button"
            onClick={props.onTodoDelete.bind(null, todo.id)}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
