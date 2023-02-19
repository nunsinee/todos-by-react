import React, { useState } from "react";
import "./TodosItem.css";

const TodosItem = (props) => {
	const [hover, setHover] = useState(false);

	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	const onHover = () => {
		setHover(true);
	};

	const onLeave = () => {
		setHover(false);
	};

	return (
		<li
			className="todos-item"
			onClick={deleteHandler}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
		>
			{hover ? (
				<p style={{ color: "orange", fontSize: "2rem" }}>
					Do you want to delete this item?.. Please Click!
				</p>
			) : (
				props.children
			)}
		</li>
	);
};

export default TodosItem;
