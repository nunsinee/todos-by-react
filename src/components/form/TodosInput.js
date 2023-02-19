import React, { useState } from "react";
import "./TodosInput.css";
import Button from "../ui/Button";

const TodosInput = (props) => {
	const [enteredValue, setEnterValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const todosChangeInputHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnterValue(event.target.value);
	};

	const submitChangeInputHandler = (event) => {
		event.preventDefault();

		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddedText(enteredValue);
	};

	return (
		<form onSubmit={submitChangeInputHandler}>
			<div
				className={`form-control ${!isValid ? "invalid" : ""}`}
				onSubmit={submitChangeInputHandler}
			>
				<label>Please Enter Text</label>
				<input type="text" onChange={todosChangeInputHandler} />
			</div>
			<Button type="submit">Add Text</Button>
		</form>
	);
};

export default TodosInput;
