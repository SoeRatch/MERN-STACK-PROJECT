import { combineReducers } from 'redux';
import {user,userdetails} from './reducers/user';
import {articles, titles, article} from './reducers/articles';

export default combineReducers({
	user,
	userdetails,
	articles,
	titles,
	article
});