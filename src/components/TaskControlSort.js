import React from 'react';
import {Col} from 'react-bootstrap';
import '../App.css';
import {SortBy, SortType} from '../@types';
import useTask from '../hooks/useTask';

const TaskControlSort = () => {
	const {sort, setSort} = useTask();

	const onSort = (sortBy, sortType) => {
		// TODO: cập nhật lại giá trị của state sort
		setSort({sortBy, sortType});
	};

	return (
		<Col sm={6}>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Sắp xếp
					<span className="fa fa-caret-square-o-down ml-5" />
				</button>
				<ul className="dropdown-menu" aria-labelledby="triggerId">
					<li onClick={() => onSort(SortBy.BY_NAME, SortType.ASC)}>
						{/* eslint-disable-next-line */}
						<a role="button" className={sort.sortBy === SortBy.BY_NAME && sort.sortType === SortType.ASC ? 'sort-selected' : ''}>
							<span className="fa fa-sort-alpha-asc pr-5">
								Tên A-Z
							</span>
						</a>
					</li>
					<li onClick={() => onSort(SortBy.BY_NAME, SortType.DESC)}>
						{/* eslint-disable-next-line */}
						<a role="button" className={sort.sortBy === SortBy.BY_NAME && sort.sortType === SortType.DESC ? 'sort-selected' : ''}>
							<span className="fa fa-sort-alpha-asc pr-5">
								Tên Z-A
							</span>
						</a>
					</li>
					<li role="separator" className="divider" />
					<li onClick={() => onSort(SortBy.BY_PRIORITY, SortType.ASC)}>
						{/* eslint-disable-next-line */}
						<a role="button" className={sort.sortBy === SortBy.BY_PRIORITY && sort.sortType === SortType.ASC ? 'sort-selected' : ''}>
							Quan trọng
						</a>
					</li>
					<li onClick={() => onSort(SortBy.BY_PRIORITY, SortType.DESC)}>
						{/* eslint-disable-next-line */}
						<a role="button" className={sort.sortBy === SortBy.BY_PRIORITY && sort.sortType === SortType.DESC ? 'sort-selected' : ''}>
							Không quan trọng
						</a>
					</li>
				</ul>
			</div>
		</Col>
	);
};

export default TaskControlSort;