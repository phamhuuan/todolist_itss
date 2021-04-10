import {useContext} from 'react';
import {UseFromType} from '../@types';
import {FormContext} from '../contexts/FormContext';

/**
 * @returns UseFromType
 * isOpen: boolean | trạng thái form đóng hoặc mở
 * toggleForm: () => void | hàm toggle form (ví dụ form đang đóng -> mở và ngược lại)
 * openForm: () => void | hàm mở form
 * closeForm: () => void | hàm đóng form
 * formType: FormType | có 2 giá trị FormType.ADD | FormType.EDIT
 * setFormType: (formType: FormType) => void | hàm set giá trị của formType
 */
const useForm = (): UseFromType => {
	const {isOpen, setIsOpen, formType, setFormType} = useContext(FormContext);

	const toggleForm = (): void => {
		// TODO: thay đổi trạng thái của form (đóng -> mở || mở -> đóng)
		setIsOpen(!isOpen);
	};

	const openForm = (): void => {
		// TODO: mở form
		setIsOpen(true);
	};

	const closeForm = (): void => {
		// TODO: đóng form
		setIsOpen(false);
	};

	return {isOpen, toggleForm, openForm, closeForm, formType, setFormType};
}

export default useForm;
