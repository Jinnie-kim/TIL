import Todo from "../models/todo";

type Props = {
  children?: React.ReactNode;
  itmes: Todo[];
};

const Todos: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <ul>
      {props.itmes.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
