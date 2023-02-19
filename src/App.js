import React, { useState } from "react";
import "./App.css";
import TodosInput from "./components/form/TodosInput";
import TodosList from "./components/list/TodosList";

const App = () => {
	const [addedText, setAddedText] = useState([
		{ text: "Make Dinner", id: "01" },
		{ text: "Clean Toilet", id: "02" },
	]);

	const addedTextHandler = (enteredText) => {
		setAddedText((prevText) => {
			const updateText = [...prevText];
			updateText.unshift({
				text: enteredText,
				id: Math.random().toString(),
			});
			return updateText;
		});
	};

	const deleteITextItemHanler = (todoId) => {
		setAddedText((prevText) => {
			const updateText = prevText.filter((todo) => todo.id !== todoId);
			return updateText;
		});
	};

	let content = (
		<p style={{ textAlign: "center", color: "navy" }}>
			No goals found. Maybe add one?
		</p>
	);

	if (addedText.length > 0) {
		content = (
			<TodosList items={addedText} onDeleteItem={deleteITextItemHanler} />
		);
	}

	return (
		<>
			<h1>Todos List, Adding Text List, Delete Text List by click</h1>
			<section id="todos">
				<TodosInput onAddedText={addedTextHandler} />
			</section>
			<section id="todos-form">
				{content}
				{/* <TodosList
					items={addedText}
					onDeleteItem={deleteITextItemHanler}
				/> */}
			</section>
		</>
	);
};

export default App;
