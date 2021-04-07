import {useContext} from 'react';	
import {Task, UseTaskType} from '../@types';
import {TaskContext} from '../contexts/TaskContext';
import useForm from './useForm';
import useTaskFormData from './useTaskFormData';

const STORAGE_TASKS_KEY = 'tasks';

const useTask = (): UseTaskType => {
	const {tasks, setTasks, sort, setSort, filterText, setFilterText} = useContext(TaskContext);
	const {closeForm} = useForm();
	const {removeFormDataField} = useTaskFormData();

	const addTask = (task: Task): void => {
		// TODO: Thêm task và lưu vào local storage
	};

	const removeTask = (id: string): void => {
		// TODO: Xóa task theo id và lưu vào local storage
	};

	const updateTask = (id: string, newValue: Task) => {
		// TODO: Cập nhật task theo id và lưu vào local storage
	}

	return {tasks, addTask, removeTask, updateTask, sort, setSort, filterText, setFilterText};
};

export default useTask;
