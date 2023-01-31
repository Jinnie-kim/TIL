import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

type Props = {
  children?: React.ReactNode;
  itmes: Todo[];
  onRemoveTodo: (todoId: string) => void;
};

const Todos: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.itmes.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
