import React from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import GuestRoute from '../../routes/GuestRoute';
import * as actions from '../../../actions/auth';
import LoginPage from '../../pages/LoginPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import s from './Iconn.css';


class Iconn extends React.Component{

	state={
		isOpen: false
	}

	close = data => this.setState({
			...this.state,
			isOpen: data
		});

	changeposition = () =>this.setState({
			...this.state,
			isOpen: !this.state.isOpen
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

	render() {
			const {isAuthenticated, logout, location} = this.props;
		const {isOpen} = this.state;
		const style = isOpen ?this.finalstyle() : this.initialstyle();
		return(
											
					<div>
						{ 
							isAuthenticated? <button onClick={()=>logout()}>Logout</button>
			             : <div onClick={this.changeposition} role="presentation"> 
							
								<img src="user.png" className={s.userbtn} alt="" />
								
							
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
										   		<GuestRoute location={location}  path='/' exact component={() => (<LoginPage close={this.close} />)}/>
										   			</div>                                      

										}
							</Motion>		
							
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
										   		<GuestRoute location={location}  path='/forgot_password' exact component={ForgotPasswordPage}/>
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
	logout:PropTypes.func.isRequired,
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
}

export default connect(mapStateToProps,{logout:actions.logout})(Iconn);