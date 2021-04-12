import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import '../App.css';
import TaskItem from './TaskItem';
import useTask from '../hooks/useTask';
import { Priority, SortBy, SortType } from '../@types';

const TaskList = () => {
	const { tasks, sort, filterText } = useTask();
	const [displayTasks, setDisplayTasks] = useState(tasks);
	const [filter, setFilter] = useState({
		filterName: '',
		filterPriority: '-1',
	});

	useEffect(() => {
		let tempTasks = tasks;

		if (filter.filterName !== '') {
			tempTasks = tasks.filter((task) => {
				return task.name.toLowerCase().includes(filter.filterName.toLowerCase())
			})
		}

		if (filter.filterPriority !== '-1') {
			tempTasks = tempTasks.filter((task) => {
				return task.priority === parseInt(filter.filterPriority, 10);
			});
		}

		if (sort.sortBy === SortBy.BY_NAME) {
			tempTasks = tempTasks.sort((task1, task2) => {
				if (sort.sortType === SortType.ASC) {
					if (task1.name < task2.name) return -1;
					return 1;
				} else {
					if (task1.name > task2.name) return -1;
					return 1;
				}
			});
		}
		if (sort.sortBy === SortBy.BY_PRIORITY) {
			tempTasks = tempTasks.sort((task1, task2) => {
				if (sort.sortType === SortType.ASC) {
					return task1.priority - task2.priority;
				} else {
					return task2.priority - task1.priority;
				}
			})
		}
		setDisplayTasks([...tempTasks]);
	}, [tasks, sort, filter]);

	const onChange = (event) => {
		// TODO: Xử lí sự kiện thay đổi filter trên form
		const {name, value} = event.target;
		console.log(name, value);
		setFilter({...filter, [name]: value});
	}


	return (
		<Table className="mt-10" striped bordered hover>
			<thead>
				<tr>
					<th width='5%' className="text-center">STT</th>
					<th width='50%' className="text-center">Tên</th>
					<th width='15%' className="text-center">Độ quan trọng</th>
					<th width='30%' className="text-center">Hành động</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td width='5%' />
					<td width='45%'>
						<Form.Control type="text" name="filterName" value={filter.filterName} onChange={onChange} placeholder='Enter to filter' />
					</td>
					<td width='20%'>
						<Form.Control as="select" name="filterPriority" value={filter.filterPriority} onChange={onChange}>
							<option value={'-1'}>Tất cả</option>
							<option value={Priority.HIGH}>Độ ưu tiên cao</option>
							<option value={Priority.LOW}>Độ ưu tiên thấp</option>
						</Form.Control>
					</td>
					<td width='30%' />
				</tr>
				{displayTasks.map((task, index) => <TaskItem key={task.id} index={index} task={task} />)}
			</tbody>
		</Table>
	);
};

export default TaskList;