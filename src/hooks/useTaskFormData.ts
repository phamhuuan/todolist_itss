import {Priority, Task} from './useTask';
import {useState} from 'react';

export interface UseTaskFormDataType {
  formData: Task;
  removeFormDataField: () => void;
  setFormDataField: (task: Task) => void;
}

const useTaskFormData = (): UseTaskFormDataType => {
  const [formData, setFormData] = useState<Task>({
    id: '',
    name: '',
    priority: Priority.HIGH,
  });

  const removeFormDataField = (): void => {
    // TODO: xóa các trường dữ liệu trong form nhập task
  }

  const setFormDataField = (task: Task): void => {
    // TODO: set các trường dữ liệu trong form nhập task
  }

  return {formData, removeFormDataField, setFormDataField};
};

export default useTaskFormData;