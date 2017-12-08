import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

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
			<Form onSubmit={this.onSubmit} >
				<Form.Field >
					<label htmlFor="email"> Email </label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="email@email.com"
						value={data.email}
						onChange={this.onChange}
					/>
					{ errors.email && <InlineError text={errors.email}/>}
				</Form.Field>

				<Form.Field >
					<label htmlFor="password"> password </label>
					<input
						type="password"
						id="password"
						name="password"
						value={data.password}
						onChange={this.onChange}
					/>
					{ errors.password && <InlineError text={errors.password}/> }
				</Form.Field>

				<Button primary> Sign up </Button>
			</Form>
			);
	}
}

SignupForm.propTypes={
	submit: PropTypes.func.isRequired
};

export default SignupForm;