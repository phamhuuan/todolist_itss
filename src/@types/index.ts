export enum Priority {
	HIGH,
	LOW,
}

export enum FormType {
	ADD,
	EDIT,
};

export interface Task {
	id: string;
	name: string;
	priority: Priority;
};

export enum SortBy {
	BY_NAME,
	BY_PRIORITY,
};

export enum SortType {
	ASC,
	DESC,
}

export interface Sort {
	sortBy: SortBy;
	sortType: SortType;
}

export interface UseTaskType {
	tasks: Task[];
	addTask: (task: Task) => void;
	removeTask: (id: string) => void;
	updateTask: (id: string, newValue: Task) => void;
	sort: Sort;
	setSort: (sort: Sort) => void;
	filterText: string;
	setFilterText: (text: string) => void;
}

export interface UseFromType {
	isOpen: boolean;
	toggleForm: () => void;
	openForm: () => void;
	closeForm: () => void;
	formType: FormType;
	setFormType: (formType: FormType) => void;
}

export interface UseTaskFormDataType {
	formData: Task;
	removeFormDataField: () => void;
	setFormData: (task: Task) => void;
}

export interface UseTaskFormDataContextType {
	formData: Task;
	setFormData: (task: Task) => void;
}