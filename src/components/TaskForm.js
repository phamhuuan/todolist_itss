import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {FormType, Priority} from '../@types';
import useForm from '../hooks/useForm';
import useTask from '../hooks/useTask';
import useTaskFormData from '../hooks/useTaskFormData';
import randomString from 'random-string';

const generateId = () => {
  return randomString({length: 5}) + '-' + randomString({length: 5}) + '-' + randomString({length: 5}) + '-' + randomString({length: 5});
}

const TaskForm = () => {
	const {isOpen, closeForm, formType} = useForm();
	const {formData, setFormData, removeFormDataField} = useTaskFormData();
	const {addTask, updateTask} = useTask();

	const onCloseForm = () => {
		closeForm();
	};

	const onChange = (event) => {
		var target = event.target;
		var value = target.value;
		if (target.name === 'name'){
			setFormData({id: generateId(),name: value, priority: Priority.HIGH});
		}else{
			setFormData({id: formData.id, name: formData.name, priority: value});
		}
	};

	const onClear = () => {
		removeFormDataField();
	}

	const onHandleSubmit = (event) => {
		event.preventDefault();
		switch (formType) {
			case FormType.ADD:
				addTask(formData);
				break;
			case FormType.EDIT:
				updateTask(formData);
				break;
			default:
				break;
		}
	};

	if (!isOpen) return null;
	return (
		<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{formType === FormType.ADD ? 'Thêm công việc' : 'Cập nhật công việc'}
						<span className="fa fa-times-circle text-right" onClick={onCloseForm}></span>
					</h3>
				</div>
				<div className="panel-body">
					<Form onSubmit={onHandleSubmit}>
						<Form.Group controlId="jobName">
							<Form.Label>Tên</Form.Label>
							<Form.Control type="text"  placeholder="Nhập tên công việc" name="name" value={formData.name} onChange={onChange} />
						</Form.Group>
						<Form.Group controlId="status">
							<Form.Label>Mức độ quan trọng</Form.Label>
							<Form.Control as="select" name="priority" value={formData.priority} onChange={onChange}>
								<option value={Priority.HIGH}>Quan trọng</option>
								<option value={Priority.LOW}>Không quan trọng</option>
							</Form.Control>
							<br/>
							<div className="text-center">
								<Button type="submit" variant="warning" disabled={formData.name === ''}>
									<span className="fa fa-plus mr-5" />
									Lưu lại
								</Button>&nbsp;
								<Button type="button" variant="danger" onClick={onClear}>
									<span className="fa fa-close mr-5" />
									Hủy bỏ
								</Button>
							</div>
						</Form.Group>
					</Form>
				</div>
			</div>
	);
};

export default TaskForm;
