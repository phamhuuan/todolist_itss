import {createContext, useState} from 'react';
import {SortBy, SortType} from '../@types';

let tasks = [];
if (localStorage.getItem('tasks') != null) tasks = JSON.parse(localStorage.getItem('tasks'));

export const TaskContext = createContext({
	tasks,
	setTasks: (tasks) => {},
	sort: {
		sortBy: SortBy.BY_NAME,
		sortType: SortType.ASC,
	},
	setSort: (sortBy, sortType) => {},
	filterText: '',
	setFilterText: (text) => {},
	isSearching: false,
	setIsSearching: (isSearching) => {},
});

const TaskProvider = ({children}) => {
	const [tasks, setTasks] = useState(localStorage.getItem('tasks') != null ? JSON.parse(localStorage.getItem('tasks')) : []);
	const [sort, setSort] = useState({
		sortBy: SortBy.BY_NAME,
		sortType: SortType.ASC,
	});
	const [filterText, setFilterText] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	return (
		<TaskContext.Provider value={{tasks, setTasks, sort, setSort, filterText, setFilterText, isSearching, setIsSearching}}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
