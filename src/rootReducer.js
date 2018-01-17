import { combineReducers } from 'redux';
import user from './reducers/user';
import {articles, titles, article} from './reducers/articles';

export default combineReducers({
	user,
	articles,
	titles,
	article
});