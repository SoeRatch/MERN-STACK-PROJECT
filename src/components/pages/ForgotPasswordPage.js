import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import {resetPasswordRequest} from '../../actions/auth';

class ForgotPasswordPage extends React.Component{

	state = {
		success: false
	};

	submit =data => this.props.resetPasswordRequest(data).then(()=>{
		this.props.closefp(false);
		this.setState({success:true})
	});

	simplyclose =() => {
		this.props.closefp(false);
	};
	


	render(){
		return(
			<div>

				{this.state.success?(
					<Message> Email has been sent . </Message>
					):(
						
					  <ForgotPasswordForm submit={this.submit} simplyclose={this.simplyclose}/>
					)}

			</div>
			);
	}

}

ForgotPasswordPage.propTypes = {
	resetPasswordRequest: PropTypes.func.isRequired,
	closefp:PropTypes.func.isRequired
}

export default connect(null,{resetPasswordRequest})(ForgotPasswordPage);