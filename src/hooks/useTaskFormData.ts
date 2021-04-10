import {useContext} from 'react';
import {UseTaskFormDataType, Priority} from '../@types';
import {TaskFormDataContext} from '../contexts/TaskFormDataContext';
/**
 * @returns UseTaskFormDataType
 * formData: Task | thông tin về task hiển thị trên form
 * removeFormDataField: () => void | hàm xóa hết giá trị trong form về giá trị mặc định
 * setFormData: (task: Task) => void | hàm set giá trị cho form
 */
const useTaskFormData = (): UseTaskFormDataType => {
	const {formData, setFormData} = useContext(TaskFormDataContext);

  const removeFormDataField = (): void => {
		// TODO: xóa các trường dữ liệu trong form nhập task
		setFormData({id: '', name: '', priority: Priority.HIGH});
  }

  return {formData, removeFormDataField, setFormData};
};

export default useTaskFormData;