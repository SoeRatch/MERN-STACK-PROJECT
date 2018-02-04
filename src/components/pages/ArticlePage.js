/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Editor, EditorState , convertFromRaw,CompositeDecorator } from 'draft-js';
import { fetchsingleArticle, votekora } from '../../actions/articles'
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
	voting = (cid) => {this.props.votekora({id:cid,vote:'up'});}

	render(){

     		const decorator = new CompositeDecorator([
		      {
		        strategy: findLinkEntities,
		        component: Link,
		      },
		    ]);
	    const { article } = this.props;   
	   return(
	   <div>
	   		

			<div className={s.article}>
				
				<h5 className={s.newspaper}><span>{this.props.match.params.paramt}</span></h5>
				{_.map(article, art => {
                    const nn = art.articlestring;
                    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
                    const pp = art._id;
                    const vot=art.votes;
                    const editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(nn)), decorator);

                   return (
                       <div>  
                       		<div className={s.likebutton} onClick={this.voting(pp)} role="presentation">
								  <i className="fa fa-heart" />
								  <div>{vot}</div>
							</div>
							
                          	<Editor 
	                           editorState={editorState}
	                            readOnly 
                            	/>
              
                       </div>
                   )}
                  )}				
	    	</div>
	    </div>

			);

	}

}

ArticlePage.propTypes={
    fetchsingleArticle: PropTypes.func.isRequired,
    votekora: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, {fetchsingleArticle, votekora})(ArticlePage);
