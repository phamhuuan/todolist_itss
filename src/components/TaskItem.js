import React, { useState } from 'react';
import '../App.css';
import { Button, InputGroup, FormControl, Col } from 'react-bootstrap';
import { FormType, Priority } from '../@types';
import useTask from '../hooks/useTask';
import useForm from '../hooks/useForm';
import useTaskFormData from '../hooks/useTaskFormData';

const TaskItem = ({ task, index }) => {
	const { updateTask, removeTask } = useTask();
	const { openForm, setFormType } = useForm();
	const { setFormData } = useTaskFormData();
	const [isEdit, setEdit] = useState(false);
	const [input, setInput] = useState(task.name);

	const changePriority = () => {
		// TODO: Thay đổi độ quan trọng khi bấm vào label độ quan trọng
		updateTask(task.id, { ...task, priority: task.priority === Priority.HIGH ? Priority.LOW : Priority.HIGH })
	};

	const editTask = () => {
		// TODO: Mở form chỉnh sửa task
		setEdit(true)
	};

	const changeInput = e => {
		setInput(e.target.value);
		if (e.key === 'Enter')
			handleSubmit()
	}

	const handleSubmit = () => {
		updateTask(task.id, { ...task, name: input })
		setEdit(false)
	}

	const deleteTask = () => {
		removeTask(task.id);
	}

	return (
		<tr>
			<td>{index + 1}</td>

			<td>
				{isEdit === true ? (<div>
					<Col sm={7}>
						<FormControl
							aria-describedby="basic-addon2"
							value={input}
							onChange={changeInput}
							onKeyDown={changeInput}
						/>
					</Col>
					<span>
						<Button className='mr-5' variant="success" onClick={handleSubmit} >Submit</Button>
						<Button variant="danger" onClick={() => { setEdit(false); setInput(task.name) }} >Cancel</Button>
					</span>
				</div>) : task.name}
			</td>
			<td className="text-center">
				<span className={task.priority === Priority.HIGH ? "label label-danger" : "label label-success"} onClick={changePriority} style={{ padding: '5px' }}>
					{task.priority === Priority.HIGH ? 'Độ ưu tiên cao' : 'Độ ưu tiên thấp'}
				</span>
			</td>
			<td className="text-center">
				<Button variant="warning" onClick={editTask}>
					<span className="fa fa-pencil mr-5" />Sửa
				</Button>&nbsp;
				<Button variant="danger" onClick={deleteTask}>
					<span className="fa fa-trash mr-5" />Xóa
				</Button>
			</td>
		</tr>
	);
}

export default TaskItem;
