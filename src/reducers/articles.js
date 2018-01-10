import { createSelector } from 'reselect';
import { ARTICLES_FETCHED, ARTICLE_CREATED} from '../types';

export default function articles(state={}, action={}){
	switch(action.type){
		case ARTICLES_FETCHED:
		case ARTICLE_CREATED:
			return {...state, ...action.data.entities.articles};
		default: return state;
	}
}

// SELECTORS

export const articlesSelector = state => state.articles;

export const allArticlesSelector = createSelector(
	articlesSelector,
	articlesHash => Object.values(articlesHash)
);