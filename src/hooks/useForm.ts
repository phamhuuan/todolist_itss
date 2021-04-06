import {useState} from 'react';

export interface UseFromType {
	isOpen: boolean;
	toggleForm: () => void;
	openForm: () => void;
	closeForm: () => void;
}

const useForm = (): UseFromType => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleForm = (): void => {
		// TODO: thay đổi trạng thái của form (đóng -> mở || mở -> đóng)
	};

	const openForm = (): void => {
		// TODO: mở form
	};

	const closeForm = (): void => {
		// TODO: đóng form
	};

	return {isOpen, toggleForm, openForm, closeForm};
}

export default useForm;
