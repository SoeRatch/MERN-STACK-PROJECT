import React from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import {Message} from 'semantic-ui-react';
import { Motion, spring } from 'react-motion';
import {withRouter} from 'react-router-dom';
import InlineError from '../messages/InlineError';
import s from '../style/LoginForm.css';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';

class LoginForm extends React.Component{
	state={
		data:{
			email:'',
			password:''
		},
		errors:{},
		isOpenfp: false
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
			this.props.submit(this.state.data)
				.catch(err => this.setState({
				 	errors: err.response.data.errors
				 }));
		}
	};

	simplyclose=() => {
		this.props.simplyclose();
	}


	closefp = data => this.setState({
			...this.state,
			isOpenfp: data
		});
	

	finalstylefp=()=>{
		const final = {
	
			left: spring(175)
		};
		return final;
	}

	initialstylefp=()=>{
		const initial = {
	
			left: spring(-750)
		};
		return initial;
	}

	changepositionfp = () =>this.setState({
			...this.state,
			isOpenfp: !this.state.isOpenfp
		});


	validate = (data) => {
		const errors={};
		if(!Validator.isEmail(data.email))
			errors.email = "Invalid email";
		if(!data.password)
			errors.password="can't be blank";
		return errors;
	}

	render(){
	
			const {data,errors,isOpenfp} = this.state;
			const stylefp = isOpenfp ?this.finalstylefp() : this.initialstylefp();
	
		return(

			<div>
						<div className={s.loginBox} >
							<div ><button className={s.close} onClick={this.simplyclose}><i className="fa fa-times" /></button></div>

							
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
									value="Sign In"
								/>
								<div onClick={this.changepositionfp} role="presentation" style={{cursor:"pointer"}}> 
									<p>Forgot Password?</p>
           						</div>
           						
								
							</form>
							
							{	
							<Motion style={stylefp}>
										{
											({left}) =>
										   <div
										   		style={{
										   				left,
										   				top:'210px',
										   				position:'absolute'
										   		}}>
										   		<ForgotPasswordPage closefp={this.closefp}/>
										   	</div>                                      

										}
							</Motion>		
							
							}

					





							{ errors.global && (
								<Message negative>
									<Message.Header> Something went wrong </Message.Header>
									<p> { errors.global }</p>
								</Message>

							)}
						</div>
			</div>

			);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired,
	close:PropTypes.func.isRequired,
	simplyclose: PropTypes.func.isRequired
};

export default withRouter(LoginForm);
