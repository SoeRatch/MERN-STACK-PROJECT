import { createSelector } from 'reselect';
import { ARTICLE_CREATED, TITLES_FETCHED, SINGLE_ARTICLE_FETCHED} from '../types';

export const articles=(state={}, action={})=>{
	switch(action.type){
		case ARTICLE_CREATED:
			return {...state, ...action.data.entities.articles};
		default: return state;
	}
}

export const titles=(state={}, action={})=>{
	switch(action.type){
		
		case TITLES_FETCHED:
			return {  ...action.titles}
		default: return state;
	}
}

export const article=(state={}, action={})=>{
	switch(action.type){
		case SINGLE_ARTICLE_FETCHED:
		    return {  ...action.article.entities.article};
		default: return state;
	}
}

// SELECTORS

export const artSelector = state => state.article;

export const articleSelector = createSelector(
	artSelector,
	articleHash => Object.values(articleHash)
);