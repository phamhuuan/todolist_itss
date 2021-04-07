import React, { useState } from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import '../App.css';
import useTask from '../hooks/useTask';

const TaskControlSearch = () => {
	const {setFilterText} = useTask();
	const [text, setText] = useState('');

	const onChange = (event) => {
		// TODO: xử lí sự kiện thay đổi nội dung input
		setText(event.target.value);
	};

	const onSearch = () => {
		// TODO: filter task theo tên
		setFilterText(text);
	};

	return (
		<Col sm={6}>
			<div className="input-group">
				<Form.Control type="text" placeholder="Search" name="name" value={text} onChange={onChange} />
				<span className="input-group-btn">
					<Button type="button" variant="primary" onClick={onSearch}>
						<span className="fa fa-search mr-5"></span>Tìm
					</Button>
				</span>
			</div>
		</Col>
	);
};

export default TaskControlSearch;
