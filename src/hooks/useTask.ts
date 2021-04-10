import {useContext} from 'react';	
import {Task, UseTaskType} from '../@types';
import {TaskContext} from '../contexts/TaskContext';
import useForm from './useForm';
import useTaskFormData from './useTaskFormData';

const STORAGE_TASKS_KEY = 'tasks';

/**
 * @returns UseTaskType
 * tasks: Task[] | mảng các tasks
 * addTask: (task: Task) => void | hàm thêm task mới
 * removeTask: (id: string) => void | hàm xóa task theo id
 * updateTask: (id: string, newValue: Task) => | hàm cập nhật task theo id
 * sort: Sort | sort có 2 thuộc tính sortType (SortType.ASC | SortType.DESC) và sortBy (SortBy.BY_NAME | SortBy.BY_PRIORITY)
 * setSort: (sortBy: SortBy, sortType: SortType) => void | hàm set kiểu sắp xếp
 * filterText: string | filterText là giá trị của thanh search bên trên
 * setFilterText: (filterText: string) => void | hàm set filterText
 */
const useTask = (): UseTaskType => {
	const {tasks, setTasks, sort, setSort, filterText, setFilterText} = useContext(TaskContext);
	const {closeForm} = useForm();
	const {removeFormDataField} = useTaskFormData();

	const addTask = (task: Task): void => {
		// TODO: Thêm task và lưu vào local storage
		const newTasks = [...tasks, task];
		setTasks(newTasks);
		localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(newTasks));
		removeFormDataField();
		closeForm();
	};

	const removeTask = (id: string): void => {
		// TODO: Xóa task theo id và lưu vào local storage
		const newTasks = tasks.filter((task: Task) => task.id !== id);
		setTasks([...newTasks]);
		localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify([...newTasks]));
	};

	const updateTask = (id: string, newValue: Task) => {
		// TODO: Cập nhật task theo id và lưu vào local storage
		const index: number = tasks.findIndex((task: Task) => task.id === id);
		tasks[index] = newValue;
		setTasks([...tasks]);
		localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify([...tasks]));
		removeFormDataField();
		closeForm();
	}

	return {tasks, addTask, removeTask, updateTask, sort, setSort, filterText, setFilterText};
};

export default useTask;
