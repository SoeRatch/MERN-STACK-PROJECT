import React from 'react';
import PropTypes from 'prop-types';
import {Message} from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import s from '../style/LoginForm.css';

class ForgotPasswordForm extends React.Component{
	state={
		data:{
			email:''
		},
		errors:{}
	}

	onChange = e => this.setState({
		...this.state,
		data:{...this.state.data,
			[e.target.name]:e.target.value}
		
	});

	onSubmit = e =>{
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({errors});
		if(Object.keys(errors).length === 0){
			this.props.submit(this.state.data)
				.catch(err => this.setState({
				 	errors: err.response.data.errors
				 }));
		}
	};

	simplyclose=() => {
		this.props.simplyclose();
	}

	validate = data => {
		const errors={};
		if(!isEmail(data.email))
			errors.email = "Invalid email";
		return errors;
	}

	render(){
		const {data,errors} = this.state;
		return(

			
			<div className={s.loginBox}>
							<div ><button className={s.close} onClick={this.simplyclose}><i className="fa fa-times" /></button></div>

							<form onSubmit={this.onSubmit}>
								{!!errors.global && <Message negative> {errors.global} </Message>}
								<p>Email</p>
								<input
									type="email" 
									id="email"
									name="email"
									value={data.email}
									placeholder="email"
									onChange={this.onChange}
								/>
								{errors.email && <InlineError text={errors.email} />}

								<input
									type="submit"
									name=""
									value="Send Email"
								/>
								
							</form>


			</div>

			);
	}
}

ForgotPasswordForm.propTypes ={
	submit: PropTypes.func.isRequired,
	simplyclose: PropTypes.func.isRequired
};

export default ForgotPasswordForm;