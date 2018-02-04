import React from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import * as actions from '../../../actions/auth';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import s from './Iconn.css';
import flex from '../../style/Flex.css'

class Iconn extends React.Component{

	state={
		isOpen: false,
		isOpensp: false
	}

	close = data => this.setState({
			...this.state,
			isOpen: data
		});

	closesp = data => {
		this.setState({
			...this.state,
			isOpensp: data
		});
	}

	finalstylesp=()=>{
		const final = {
	
			top: spring(350)
		};
		return final;
	}

	initialstylesp=()=>{
		const initial = {
	
			top: spring(-250)
		};
		return initial;
	}

	changepositionsp = () =>this.setState({
			...this.state,
			isOpensp: !this.state.isOpensp,
			isOpen: false
		});

	

	finalstyle=()=>{
		const final = {
	
			top: spring(350)
		};
		return final;
	}

	initialstyle=()=>{
		const initial = {
	
			top: spring(-250)
		};
		return initial;
	}

	changeposition = () =>this.setState({
			...this.state,
			isOpen: !this.state.isOpen,
			isOpensp: false
		});

	render() {
			const {isAuthenticated, logout} = this.props;
		const {isOpen, isOpensp} = this.state;
		const style = isOpen ?this.finalstyle() : this.initialstyle();
		const stylesp = isOpensp ?this.finalstylesp() : this.initialstylesp();
		return(
											
					<div>
						{ 
							isAuthenticated? <div className={flex.flexRowContainer}>
								<Link to='/articles/new'><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Write</span></button></Link>
								<Link to = '/' ><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Home</span></button></Link>
								<Link to = '/dashboard' ><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Dashboard</span></button></Link>
								<button onClick={()=>logout()} className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Logout</span></button>
							</div>
			             : <div className={flex.flexRowContainer}>
			             		<div onClick={this.changeposition} role="presentation"> 
							
								<button  className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Login</span></button>
						
								</div>

								<div onClick={this.changepositionsp} role="presentation"> 
							
								<button  className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Signup</span></button>
						
								</div>
							</div>
			              }
	
	
						
						{	
							<Motion style={style}>
										{
											({top}) =>
										   <div
										   		style={{
										   				top,
										   				left:'50%',
										   				position:'absolute'
										   		}}>
										   		<LoginPage close={this.close} />
										   			</div>                                      

										}
							</Motion>		
							
					}
					
					{	
							<Motion style={stylesp}>
										{
											({top}) =>
										   <div
										   		style={{
										   				top,
										   				left:'50%',
										   				position:'absolute'
										   		}}>
										   		<SignupPage closesp={this.closesp}/>
										   	</div>                                      

										}
							</Motion>		
							
							}

					</div>
				
			);
	}


}

function mapStateToProps(state){
	return {
		isAuthenticated:!!state.user.token
	}
}

Iconn.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{logout:actions.logout})(Iconn);