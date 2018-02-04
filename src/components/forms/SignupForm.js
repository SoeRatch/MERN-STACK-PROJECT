import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import s from '../style/LoginForm.css';

class SignupForm extends React.Component{
	state = {
		data:{
			email:'',
			password:'',
			username:''
		},
		errors:{}
	};
	onChange = e => this.setState({data:{
		...this.state.data,
		[e.target.name]:e.target.value
		}
	});

	onSubmit =(e) =>{
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
			const errors ={};
			if(!isEmail(data.email))
				errors.email = "Invalid email";
			if(!data.password)
				errors.password = "Can't be blank";
			if(!data.username)
				errors.username = "Can't be blank";
			return errors;
		};

	render(){
		const {data, errors} = this.state;
		return(
			<div>
						<div className={s.loginBox}>

							<div ><button className={s.close} onClick={this.simplyclose}><i className="fa fa-times" /></button></div>

							
							<form onSubmit={this.onSubmit}>
								<p>Username</p>
								<input
									type="text" 
									id="username"
									name="username"
									value={data.username}
									placeholder="username"
									onChange={this.onChange}
								/>
								{errors.username && <InlineError text={errors.username} />}

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

								<p>Password</p>
								<input
									type="password" 
									id="password"
									name="password"
									value={data.password}
									placeholder="password"
									onChange={this.onChange}
								/>
								{errors.password && <InlineError text={errors.password} />}
								<input
									type="submit"
									name=""
									value="Sign Up"
								/>
								
								
							</form>
						</div>
					</div>

			);
	}
}

SignupForm.propTypes={
	submit: PropTypes.func.isRequired,
	simplyclose: PropTypes.func.isRequired
};

export default SignupForm;