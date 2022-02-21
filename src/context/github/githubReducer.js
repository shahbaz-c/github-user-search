import {
	DEFAULT_USERS,
	SEARCH_USERS,
	GET_USER,
	SET_LOADING,
	GET_REPOS,
	CLEAR_USERS,
	SEARCH_ALERT,
	REMOVE_ALERT,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case DEFAULT_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case SEARCH_ALERT:
			return {
				...state,
				alert: action.payload,
			};
		case REMOVE_ALERT:
			return {
				...state,
				alert: null,
			};
		default:
			return state;
	}
};
