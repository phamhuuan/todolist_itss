import {useState, useEffect} from 'react';

export enum Priority {
	HIGH,
	LOW,
}

export interface Task {
	id: String;
	name: String;
	priority: Priority;
};

export interface UseTaskType {
	tasks: Task[];
	addTask: (task: Task) => void;
	removeTask: (id: string) => void;
	updateTask: (id: string, newValue: Task) => void;
}

const STORAGE_TASKS_KEY = 'tasks';

const useTask = (): UseTaskType => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		// TODO: Lấy giá trị của task từ trong local storage lưu vào biến task
    setTasks(JSON.parse(localStorage.getItem(STORAGE_TASKS_KEY)));
	}, []);

	useEffect(() => {
		// TODO: Lưu dữ liệu task vào local storage mỗi khi task thay đổi
    localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (task: Task): void => {
		// TODO: Thêm task
    setTasks([...tasks, task]);
	};

	const removeTask = (id: string): void => {
		// TODO: Xóa task theo id
	};

	const updateTask = (id: string, newValue: Task) => {
		// TODO: Cập nhật task theo id
	}

	return {tasks, addTask, removeTask, updateTask};
};

export default useTask;
