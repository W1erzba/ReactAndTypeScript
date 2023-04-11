// React.FC - FC  Functional Component

const Todos: React.FC<{ items: string[] }> = (props) => {
	// If you want to use a props in your TS components you have to add this React.FC and then there describe what kind of props this commponents needs. eg. like above where we need array of strings

	return (
		<ul>
			{props.items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};

export default Todos;
