import React from 'react';
import {Row} from 'react-bootstrap';
import '../App.css';
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';

const TaskControl = () => {
	return (
		<Row className="mt-10">
			<TaskControlSearch />
			<TaskControlSort />
		</Row>
	);
}

export default TaskControl;
