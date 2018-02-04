import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignupForm from '../forms/SignupForm';
import  {signup} from '../../actions/users';

class SignupPage extends React.Component{
	submit = data => this.props.signup(data).then(()=>{
		this.props.closesp(false);
		this.props.history.push("/dashboard");
	});

	simplyclose =() => {
		this.props.closesp(false);
	};

	render(){
		return(
			<div>
				<SignupForm submit={this.submit} simplyclose={this.simplyclose}/>
			</div>
			);
	}
}

SignupPage.propTypes = {
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired,
	signup: PropTypes.func.isRequired,
	closesp:PropTypes.func.isRequired
};

export default withRouter(connect(null,{signup})(SignupPage));