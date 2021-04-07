import {useContext} from 'react';
import {UseTaskFormDataType, Priority} from '../@types';
import {TaskFormDataContext} from '../contexts/TaskFormDataContext';

const useTaskFormData = (): UseTaskFormDataType => {
	const {formData, setFormData} = useContext(TaskFormDataContext);

  const removeFormDataField = (): void => {
		// TODO: xóa các trường dữ liệu trong form nhập task
  }

  return {formData, removeFormDataField, setFormData};
};

export default useTaskFormData;