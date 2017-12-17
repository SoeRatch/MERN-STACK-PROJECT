import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allArticlesSelector } from '../../reducers/articles';
import AddArticleCtA from '../ctas/AddArticleCtA';

const DashboardPage = ({isConfirmed, articles})=>(
			<div>
				{ !isConfirmed && <ConfirmEmailMessage />}
				{ articles.length === 0 && <AddArticleCtA /> }
			</div>

);

DashboardPage.propTypes={
	isConfirmed:PropTypes.bool.isRequired,
	articles:PropTypes.arrayOf(PropTypes.shape({
		title:PropTypes.string.isRequired
	}).isRequired).isRequired
};

function mapStateToProps(state){
	return{
		isConfirmed: !!state.user.confirmed,
		articles: allArticlesSelector(state)
	};
}

export default connect(mapStateToProps)(DashboardPage);