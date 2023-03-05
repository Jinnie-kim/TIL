import React, { FormEvent, useRef } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  onTodoAddHandler: (newTodo: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onTodoAddHandler(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
