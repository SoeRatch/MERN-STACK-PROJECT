import React from 'react';
import {  EditorState , convertToRaw } from 'draft-js';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import {Message,Input, Button } from 'semantic-ui-react';
import 'draft-js/dist/Draft.css';
import './ArticleForm.css';
import basicTextStylePlugin from '../../plugins/basicTextStylePlugin';

class ArticleForm extends React.Component{
    state={
            data:{
                    title:'',
                    type:''
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
              this.props.submit({articlestring:jsonStr,title:this.state.data.title,type:this.state.data.type})
                .catch(err => this.setState(errors: err.response.data.errors)
      );
    }
  };

   plugins = [
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


   
    render() {
        
        const errors= this.state.errors;
        const data = this.state.data;
        return (
            <div>
                    <Input 
                        type="text" 
                        id="title"
                        name="title"
                        value={data.title}
                        placeholder="Title"
                        onChange={this.ondataChange} 
                      />

                    <Input 
                        type="text" 
                        id="type"
                        name="type"
                        value={data.type}
                        placeholder="type-optional"
                        onChange={this.ondataChange} 
                      />

                    <div className="root">
                   
                        <div className="editor" onClick={this.focus} role="presentation">
                            <Editor
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