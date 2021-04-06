import React, {useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import useForm from "./hooks/useForm";
import "./App.css";
import useTask, {Priority} from "./hooks/useTask";

const App = () => {
	const {isOpen} = useForm();
  const {tasks, addTask} = useTask();

	const onToggleForm = () => {
    addTask({name: 'An', id: '123', priority: Priority.HIGH});
		// TODO: click button to open/close create task form
	};

	return (
		<div>
			<div className="container">
				<div className="text-center">
					<h1>Quản lý công việc {tasks.length}</h1>
					<hr />
				</div>
				<Row>
					<Col sm={isOpen ? 4 : 0}>{/* <TaskForm /> */}</Col>
					<Col sm={isOpen ? 8 : 12}>
						<Button type="submit" variant="primary" onClick={onToggleForm}>
							<span className="fa fa-plus mr-5"></span>Thêm công việc
						</Button>
						<br />
						{/* <TaskControl /> */}
						{/* <TaskList/> */}
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default App;
