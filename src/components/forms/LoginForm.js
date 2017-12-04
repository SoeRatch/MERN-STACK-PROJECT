import React from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import {Form, Group,  Input} from '../style/LoginForm.style';
import InlineError from '../messages/InlineError';


class LoginForm extends React.Component{
	state={
		data:{
			email:"",
			password:""
		},
		loading: false,
		errors:{}
	}

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
			this.props.submit(this.state.data);
		}
	};

	validate = (data) => {
		const errors={};
		if(!Validator.isEmail(data.email))
			errors.email = "Invalid email";
		if(!data.password)
			errors.password="can't be blank";
		return errors;
	}

	render(){
	
			const {data,errors} = this.state;
	
		return(
			<div>
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
		          		<button>Log In</button>
		        </Group>
		     </Form>
		    </div>
			);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default LoginForm;