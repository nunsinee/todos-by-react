import React from "react";
import TodosItem from "../item/TodosItem";

const TodosList = (props) => {
	return (
		<ul className="todos-list">
			{props.items.map((todo) => (
				<TodosItem
					key={todo.id}
					id={todo.id}
					onDelete={props.onDeleteItem}
				>
					{todo.text}
				</TodosItem>
			))}
		</ul>
	);
};

export default TodosList;
