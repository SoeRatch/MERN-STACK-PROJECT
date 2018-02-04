import { USER_LOGGED_IN, USER_LOGGED_OUT,USER_DETAILS } from '../types';

export const user=(state={}, action={})=>{
	switch(action.type){
		case USER_LOGGED_IN:
			return action.user;
		case USER_LOGGED_OUT:
			return {};
		default:
			return state;
	}
}

export const userdetails=(state={}, action={})=>{
	switch(action.type){
		case USER_DETAILS:
			return { ...action.userdetails};
		default: return state;
	}
}