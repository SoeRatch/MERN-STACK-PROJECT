import { normalize } from 'normalizr';
import articleSchema  from '../schemas';
import { ARTICLES_FETCHED, ARTICLE_CREATED } from '../types';
import api from '../api';

const articlesFetched = (data) =>({
	type: ARTICLES_FETCHED,
	data
});

const articleCreated = data =>({
	type: ARTICLE_CREATED,
	data
});


export const fetchArticles = () => (dispatch) =>
	api.articles.fetchAll().then(articles=>
		dispatch(articlesFetched(normalize(articles,[articleSchema]))));


 export const createArticle = data => (dispatch) =>
	api.articles.create(data).then(article =>
	 dispatch(articleCreated(normalize(article,articleSchema))));

