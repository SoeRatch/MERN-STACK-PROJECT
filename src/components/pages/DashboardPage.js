/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Editor, EditorState , convertFromRaw ,CompositeDecorator} from 'draft-js';
import _ from 'lodash';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { allArticlesSelector } from '../../reducers/articles';
import AddArticleCtA from '../ctas/AddArticleCtA';
import { fetchArticles } from '../../actions/articles';

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
}

const Link = (props) => {
  const {url} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url}>
      {props.children}
    </a>
  );
};


class DashboardPage extends React.Component{
	
	componentDidMount = () => {
		this.onInit(this.props);
	}

	onInit = (props) =>{
	 props.fetchArticles();
	}

	render(){
		 const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ]);
    
		const {isConfirmed, articles} = this.props;
		return(
			<div>
				{ !isConfirmed && <ConfirmEmailMessage />}

				{articles.length === 0 && <AddArticleCtA /> }
		
				{_.map(articles, article => {
                    const nn = article.articlestring;
                    const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(nn)), decorator);

             return (
                       <div>  

                          <div><pre>
                          	<Editor 
	                           editorState={editorState}
	                            readOnly 
                            	/>
                            </pre></div>
                       </div>
                   )}
                  )}
			</div>

			);

	}

}


DashboardPage.propTypes={
	isConfirmed:PropTypes.bool.isRequired,
	fetchArticles: PropTypes.func.isRequired,
	articles:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

function mapStateToProps(state){
	return{
		isConfirmed: !!state.user.confirmed,
		articles: allArticlesSelector(state)
	};
}

export default connect(mapStateToProps,{fetchArticles})(DashboardPage);