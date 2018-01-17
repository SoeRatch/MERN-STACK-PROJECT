import React from 'react';
import {  EditorState , convertToRaw, RichUtils} from 'draft-js';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import {Message, Button} from 'semantic-ui-react';
import 'draft-js/dist/Draft.css';
import s from '../style/ArticleForm.css';
import basicTextStylePlugin from '../../plugins/basicTextStylePlugin';
import addLinkPlugin from '../../plugins/addLinkPlugin';

function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
  return 'superFancyBlockquote';
}

class ArticleForm extends React.Component{
    state={
            data:{
                    title:''
                  },
            editorState: EditorState.createEmpty(),
            errors:{}
       
    }

   

    componentDidMount() {
    this.focus();
  }

  

  onChange = (editorState) => {
     if (editorState.getDecorator() !== null) {
            this.setState({
              editorState
            });
          }
  }

  ondataChange = e => this.setState({data:{
    ...this.state.data,
    [e.target.name]:e.target.value
    }
  });

  
   onSubmit =() =>{
    
            const errors = this.validate(this.state);
            this.setState({errors});
            if(Object.keys(errors).length === 0){
              const dat = this.state.editorState;
              const contentState = dat.getCurrentContent();
              const rawJson = convertToRaw(contentState);              
              const jsonStr = JSON.stringify(rawJson);              
              this.props.submit({articlestring:jsonStr,title:this.state.data.title})
                .catch(err => this.setState(errors: err.response.data.errors)
      );
    }
  };


      onToggleBlock = (e)=> {
      e.preventDefault();
      this.toggleBlockType(e.target.value);
    }

     onToggleInline = (e)=> {
      e.preventDefault();
      this.toggleInlineStyle(e.target.value);
    }


     plugins = [
          addLinkPlugin,
          basicTextStylePlugin
        ]   

    focus = () => {
        this.editor.focus();
      }



    validate = (meta) => {
        const errors={};
        
        if(!meta.data.title)
          errors.title="Give a title";

        if(!meta.editorState)
          errors.editorState="you must write something to publish";
        return errors;
      }


       makeLink(){
        // eslint-disable-next-line no-alert
        const  link = window.prompt('Paste the link -');
        const  editorState  = this.state.editorState;
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
            return;
          }
        if (!link) {
              this.onChange(RichUtils.toggleLink(
                editorState, selection, null));
              return ;
            }

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity('LINK', 'IMMUTABLE', { url: link });
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentWithEntity });
        this.setState({
            editorState: RichUtils.toggleLink(
              newEditorState,
              newEditorState.getSelection(),
              entityKey
            )});
                  
      }



      toggleBlockType(blockType){
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
            )
          );
      }

       toggleInlineStyle(inlineStyle){
        this.onChange(
          RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
            )
          );
      }
   


    render() {
        
        const errors= this.state.errors;
        const data = this.state.data;

        return (
            <div className={[s.bor].join(' ')}>
                  <div className={s.inputs}>
                    <input 
                        className={s.inputed}
                        type="text" 
                        id="title"
                        name="title"
                        value={data.title}
                        placeholder="Title"
                        onChange={this.ondataChange} 
                      />
                    <div className={s.borderline} />
                  </div>

                    <div className="ui icon buttons">
                        <button className="ui button" onMouseDown = {this.onToggleInline} value='BOLD'><span><i className="bold icon"/></span></button>
                        <button className="ui button" onMouseDown = {this.onToggleInline} value='UNDERLINE'><i className="underline icon" /></button>
                        <button className="ui button" onMouseDown = {this.onToggleInline} value='ITALIC'><i className="italic icon" /></button>
                        <button className="ui button" onMouseDown = {this.onToggleBlock} value='ordered-list-item'><i className="ordered list icon" /></button>
                      <button className="ui button" onMouseDown = {this.onToggleBlock} value='unordered-list-item'><i className="unordered list icon" /></button>
                      <button className="ui button" onMouseDown = {this.onToggleBlock} value='header-one'><i className="header icon" /></button>
                      <button className="ui button" onMouseDown = {this.onToggleBlock} value='blockquote'>blockquote</button>                      
                      <button className="ui button" onClick={()=>{this.makeLink();}}><i className="linkify icon" /></button>
                     
                      </div>


                    <div className={s.root}>
                   
                        <div className={s.editor} onClick={this.focus} role="presentation">
                            <Editor
                                blockStyleFn={myBlockStyleFn}
                                editorState={this.state.editorState}
                                plugins={this.plugins}
                                onChange={this.onChange}
                                placeholder="Write something colorful..."
                                ref={(element) => { this.editor = element; }}
                                spellCheck
                             />
                        </div>
         
                    </div>
                        
                    <Button onClick={this.onSubmit}> submit draft </Button>
                    
                    { errors.global && (
                        <Message negative>
                          <Message.Header> Something went wrong </Message.Header>
                          <p> { errors.global }</p>
                        </Message>

                      )}
            </div>

        );
    }
} 

ArticleForm.propTypes ={
    submit: PropTypes.func.isRequired
}


export default ArticleForm;