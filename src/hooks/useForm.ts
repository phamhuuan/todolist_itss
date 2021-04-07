import {useContext} from 'react';
import {UseFromType} from '../@types';
import {FormContext} from '../contexts/FormContext';

const useForm = (): UseFromType => {
	const {isOpen, setIsOpen, formType, setFormType} = useContext(FormContext);

	const toggleForm = (): void => {
		// TODO: thay đổi trạng thái của form (đóng -> mở || mở -> đóng)
	};

	const openForm = (): void => {
		// TODO: mở form
	};

	const closeForm = (): void => {
		// TODO: đóng form
	};

	return {isOpen, toggleForm, openForm, closeForm, formType, setFormType};
}

export default useForm;
