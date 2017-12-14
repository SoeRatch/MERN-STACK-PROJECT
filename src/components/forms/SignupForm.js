import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';
import s from '../style/LoginForm.css';

class SignupForm extends React.Component{
	state = {
		data:{
			email:'',
			password:''
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

		validate = data => {
			const errors ={};
			if(!isEmail(data.email))
				errors.email = "Invalid email";
			if(!data.password)
				errors.password = "Can't be blank";
			return errors;
		};

	render(){
		const {data, errors} = this.state;
		return(
			<div>
						<div className={s.loginBox}>
						
							<img src="user.png" className={s.user} alt="" />
							
							<form onSubmit={this.onSubmit}>
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
	submit: PropTypes.func.isRequired
};

export default SignupForm;