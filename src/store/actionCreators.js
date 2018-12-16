import { 
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DEL_TODO_ITEM,
	INIT_LIST_ACTION
} from './actionTypes';
import axios from 'axios';

export const getChangeInputValue = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getAddTodoItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDelItemAction = (index) => ({
	type: DEL_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

/**
 * use redux-thunk manage ajax request
 * @return {[function]} [ajax request]
 */
export const getTodoList = () => {
	return (dispatch)=>{
		axios.get('/api/list.json').then((res) => {
        const data = res.data;
        const action = initListAction(data);
        dispatch(action);
    });
	}
}