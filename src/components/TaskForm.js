import React from 'react';
import useForm from '../hooks/useForm';

const TaskForm = () => {
	const {isOpen} = useForm();

	if (isOpen) return null;
	return (
		<div className="panel panel-warning">
				<div className="panel-heading">
					<h3 className="panel-title">
						{!this.state.id ? 'Thêm công việc' : 'Cập nhật công việc'}
						<span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
					</h3>
				</div>
				<div className="panel-body">
					<Form onSubmit={this.onHandleSubmit}>
						<Form.Group controlId="jobName">
							<Form.Label>Tên</Form.Label>
							<Form.Control type="text"  placeholder="Nhập tên công việc" name="name" value={this.state.name} onChange={this.onChange} />
						</Form.Group>
						<Form.Group controlId="status">
							<Form.Label>Mức độ quan trọng</Form.Label>
							<Form.Control as="select" name="status" value={this.state.status} onChange={this.onChange}>
								<option value={true}>Quan trọng</option>
								<option value={false}>Không quan trọng</option>
							</Form.Control>
							<br/>
							<div className="text-center">
								<Button type="submit" variant="warning">
									<span className="fa fa-plus mr-5" />
									Lưu lại
								</Button>&nbsp;
								<Button type="button" variant="danger" onClick={this.onClear}>
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