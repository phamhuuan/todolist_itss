import React from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import {FormType, Priority} from '../@types';
import useTask from '../hooks/useTask';
import useForm from '../hooks/useForm';
import useTaskFormData from '../hooks/useTaskFormData';

const TaskItem = ({task, index}) => {
	const {updateTask, removeTask} = useTask();
	const {openForm, setFormType} = useForm();
	const {setFormData} = useTaskFormData();

	const changePriority = () => {
		// TODO: Thay đổi độ quan trọng khi bấm vào label độ quan trọng
		updateTask(task.id, {...task, priority: task.priority === Priority.HIGH ? Priority.LOW : Priority.HIGH})
	};

	const editTask = () => {
		// TODO: Mở form chỉnh sửa task
		
	};

	const deleteTask = () => {
		// TODO: Xóa task
	}

	return (
		<tr>
			<td>{index + 1}</td>
			<td>{task.name}</td>
			<td className="text-center"> 
				<span className={task.priority === Priority.HIGH ? "label label-danger" : "label label-success"} onClick={changePriority}>
					{task.priority === Priority.HIGH ? 'Quan trọng' : 'Không quan trọng'}
				</span>
			</td>
			<td className="text-center">
				<Button variant="warning" onClick={editTask}>
					<span className="fa fa-pencil mr-5"/>Sửa
				</Button>&nbsp;
				<Button variant="danger" onClick={deleteTask}>
					<span className="fa fa-trash mr-5"/>Xóa
				</Button>
			</td>
		</tr>
	);
}

export default TaskItem;
