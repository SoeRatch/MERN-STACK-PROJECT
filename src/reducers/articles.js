import { createSelector } from 'reselect';
import { ARTICLE_CREATED, TITLES_FETCHED, SINGLE_ARTICLE_FETCHED} from '../types';

export const articles=function(state={}, action={}){
	switch(action.type){
		case ARTICLE_CREATED:
			return {...state, ...action.data.entities.articles};
		default: return state;
	}
}

export const titles= function(state={}, action={}){
	switch(action.type){
		
		case TITLES_FETCHED:
			return { ...state, ...action.titles}
		default: return state;
	}
}

export const article= function(state={}, action={}){
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