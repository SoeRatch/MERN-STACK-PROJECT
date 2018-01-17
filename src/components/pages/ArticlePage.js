/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Editor, EditorState , convertFromRaw,CompositeDecorator } from 'draft-js';
import { fetchsingleArticle } from '../../actions/articles'
import { articleSelector } from '../../reducers/articles';
import s from '../style/ArticlePage.css';



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

class ArticlePage extends React.PureComponent{

	componentDidMount = () => {
		this.onInitial(this.props);
	}

	onInitial = (props) =>{

	 props.fetchsingleArticle(this.props.match.params.paramt);
	}

	render(){

     		const decorator = new CompositeDecorator([
		      {
		        strategy: findLinkEntities,
		        component: Link,
		      },
		    ]);
	    const { article } = this.props;
	    
	   
	   return(
			<div className={s.article}>
				<h5 className={s.newspaper}><span>{this.props.match.params.paramt}</span> Times</h5>
				{_.map(article, art => {
                    const nn = art.articlestring;
                    const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(nn)), decorator);

                   return (
                       <div>  

                          	<Editor 
	                           editorState={editorState}
	                            readOnly 
                            	/>
              
                       </div>
                   )}
                  )}				
	    	</div>

			);

	}

}

ArticlePage.propTypes={
    fetchsingleArticle: PropTypes.func.isRequired,
    match: PropTypes.shape({
		params:PropTypes.shape({
			paramt:PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

function mapStateToProps(state){
	return{
		article:articleSelector(state)
	};
}

export default connect(mapStateToProps, {fetchsingleArticle})(ArticlePage);
