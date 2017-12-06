import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import {Form, Group,  Input} from '../style/LoginForm.style';
import InlineError from '../messages/InlineError';


class SignupForm extends React.Component{
	state = {
		data:{
			email:'',
			password:''
		},
		errors:{}
	};

	onChange = e =>this.setState({
		...this.state,
		data:{...this.state.data,[e.target.name]:e.target.value}
	});

	onSubmit = e =>{
		e.preventDefault();
		const errors=this.validate(this.state.data);
		this.setState({errors});

		if(Object.keys(errors).length === 0){
			this.props.submit(this.state.data)
					.catch(err=>this.setState({
						errors:err.response.data.errors
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
			<Form onSubmit={this.onSubmit}>
				<Group >
					
						<Input 
							type="email" 
							id="email"
							name="email"
							value={data.email}
							placeholder="email"
							onChange={this.onChange} />
					{errors.email && <InlineError text={errors.email} />}	
						
				</Group>

				<Group>
					
						<Input 
							type="password" 
							id="password"
							name="password"
							value={data.password}
							placeholder="password"
							onChange={this.onChange} />
						
						
				</Group>
								
		 		<Group style={{width:'120px'}}>
		          		<button>Signup </button>
		        </Group>
		     </Form>
			);
	}
}

SignupForm.propTypes={
	submit: PropTypes.func.isRequired
};

export default SignupForm;