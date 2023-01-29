type Props = {
  children?: React.ReactNode;
  itmes: string[];
};

const Todos: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <ul>
      {props.itmes.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
