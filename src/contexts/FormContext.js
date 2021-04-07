import {createContext, useState} from 'react';
import {FormType} from '../@types';

export const FormContext = createContext({isOpen: false, setIsOpen: (isOpen) => {}, formType: FormType.ADD, setFormType: (formType) => {}});

const FormProvider = ({children}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formType, setFormType] = useState(FormType.ADD);
	return (
		<FormContext.Provider value={{isOpen, setIsOpen, formType, setFormType}}>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
