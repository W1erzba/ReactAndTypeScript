import Todo from '../models/todo';

// We can use classes as a Type Aliases to define  our data types
const Todos: React.FC<{ items: Todo[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

export default Todos;
