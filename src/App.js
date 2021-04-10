import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import useForm from "./hooks/useForm";
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import {FormType} from "./@types";
import useTaskFormData from "./hooks/useTaskFormData";

const App = () => {
	const {isOpen, toggleForm, formType, setFormType} = useForm();
	const {removeFormDataField} = useTaskFormData();

	const onToggleForm = () => {
		toggleForm();
	};

	return (
		<div>
			<div className="container">
				<div className="text-center">
					<h1>Quản lý công việc</h1>
					<hr />
				</div>
				<Row>
					<Col sm={isOpen ? 4 : 0}>
						<TaskForm />
					</Col>
					<Col sm={isOpen ? 8 : 12}>
						<Button type="submit" variant="primary" onClick={onToggleForm}>
							<span className="fa fa-plus mr-5"></span>Thêm công việc
						</Button>
						<br />
						<TaskControl />
						<TaskList />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default App;
