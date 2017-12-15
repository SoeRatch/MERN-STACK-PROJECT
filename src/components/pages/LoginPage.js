import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { login } from '../../actions/auth';
import LoginForm from '../forms/LoginForm';


class LoginPage extends React.Component{
	submit = data => this.props.login(data).then(()=>{
		this.props.close(false);
		this.props.history.push("/dashboard");
	});


	render(){
		return(
				<div>
					<div>
					<LoginForm close={this.props.close} submit={this.submit} />
					</div>
					
				</div>
			);
	}

}
	
LoginPage.propTypes = {
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired,
	login:PropTypes.func.isRequired,
	close:PropTypes.func.isRequired
};

export default withRouter(connect(null,{login})(LoginPage));



