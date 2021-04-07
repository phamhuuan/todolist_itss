import {createContext, useState} from 'react';
import {Priority} from '../@types';

export const TaskFormDataContext = createContext({formData: {
	id: '',
	name: '',
	priority: Priority.HIGH,
}, setFormData: (task) => {}});

const TaskFormDataProvider = ({children}) => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		priority: Priority.HIGH,
	});
	return (
		<TaskFormDataContext.Provider value={{formData, setFormData}}>
			{children}
		</TaskFormDataContext.Provider>
	);
};

export default TaskFormDataProvider;
