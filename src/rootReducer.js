import { combineReducers } from 'redux';
import user from './reducers/user';
import articles from './reducers/articles';

export default combineReducers({
	user,
	articles
});