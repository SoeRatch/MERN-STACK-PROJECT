import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleForm from '../forms/ArticleForm';
import  { createArticle } from '../../actions/articles';
import flex from '../style/Flex.css';
import s from '../style/NewArticle.css';

class NewArticlePage extends React.Component{

submit = data =>this.props.createArticle(data).then(()=>this.props.history.push('/dashboard'));
	
	render(){
		return(
			<div className={[flex.flexRowCenter, s.divved].join(' ')} >
				<ArticleForm submit = {this.submit}/>
				 
			</div>
			);
	}
}

NewArticlePage.propTypes ={
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	createArticle:PropTypes.func.isRequired
};

export default connect(null,{createArticle})(NewArticlePage);

