import { normalize } from 'normalizr';
import {articleSchema, artSchema} from '../schemas';
import { ARTICLE_CREATED,TITLES_FETCHED, SINGLE_ARTICLE_FETCHED} from '../types';
import api from '../api';

const titlesFetched = (titles) =>({
	type: TITLES_FETCHED,
	titles
});

const singlearticleFetched = ( article ) => ({
	type: SINGLE_ARTICLE_FETCHED,
	article
});

const articleCreated = data =>({
	type: ARTICLE_CREATED,
	data
});

export const fetchtitles = () => (dispatch) =>
	api.articles.fetchtitle().then(titles=>
		dispatch(titlesFetched(titles)));

export const fetchAlltitles = () => (dispatch) =>
	api.articles.fetchAlltitle().then(titles=>
		dispatch(titlesFetched(titles)));

export const fetchsingleArticle = (paramt) => (dispatch) =>
	api.articles.fetchsingleArticle(paramt).then(article=>
		dispatch(singlearticleFetched(normalize(article,artSchema))));

export const votekora = (parameter) => () =>
	api.articles.voteArticle(parameter);

 export const createArticle = data => (dispatch) =>
	api.articles.create(data).then(article =>
	 dispatch(articleCreated(normalize(article,articleSchema))));

