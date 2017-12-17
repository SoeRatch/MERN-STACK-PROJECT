import { normalize } from 'normalizr';
import articleSchema  from '../schemas';
import { ARTICLE_CREATED } from '../types';
import api from '../api';

const articleCreated = data =>({
	type: ARTICLE_CREATED,
	data
});

 const createArticle = data => (dispatch) =>
	api.articles.create(data).then(article =>
	 dispatch(articleCreated(normalize(article,articleSchema))));

export default createArticle;