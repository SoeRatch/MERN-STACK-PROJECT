/* eslint react/prop-types: 0 */

import React from 'react';

class StyleButton extends React.Component {
	constructor() {
		super();
		this.onToggle = (e)=> {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render(){
		let className = 'RichEditor-styleButton';
		if(this.props.active){
			className += 'RichEditor-activeButton';
		}

		return(
			// eslint-disable-next-line
			<span className={className} onMouseDown = {this.onToggle}  >
				{this.props.label}
			</span>
		);
	}
}

const BLOCK_TYPES = [
	{label: 'H1', style:'header-one'},
	{label: 'H2', style:'header-two'},
	{label: 'Blockquote', style:'blockquote'},
	{label: 'UL', style:'unordered-list-item'},
	{label: 'OL', style:'ordered-list-item'},
];

export const BlockStyleControls = (props) => {
	const {editorState} =props;
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

	return (
		<div className='RichEditor-controls'>
			{BLOCK_TYPES.map((type) =>
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};

const INLINE_STYLES = [
	{label: 'Bold', style:'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'}
];

export const InlineStyleControls = (props) =>{
	const currentStyle = props.editorState.getCurrentInlineStyle();
	return(
		<div className='RichEditor-controls'>
			{ INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				 />
			)}
		</div>
	);
};

BlockStyleControls.propTypes={
	
}