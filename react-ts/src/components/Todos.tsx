import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type Props = {
  children?: React.ReactNode;
  itmes: Todo[];
};

const Todos: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <ul>
      {props.itmes.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
