import React from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import * as actions from '../../../actions/auth';
import LoginPage from '../../pages/LoginPage';
import s from './Iconn.css';
import flex from '../../style/Flex.css'

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
			const {isAuthenticated, logout} = this.props;
		const {isOpen} = this.state;
		const style = isOpen ?this.finalstyle() : this.initialstyle();
		return(
											
					<div>
						{ 
							isAuthenticated? <div className={flex.flexRowContainer}>
								<Link to='/articles/new'><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Write</span></button></Link>
								<Link to = '/' ><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Home</span></button></Link>
								<Link to = '/dashboard' ><button className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Dashboard</span></button></Link>
								<button onClick={()=>logout()} className={[s.btn, s.stripedshadow, s.dark].join(' ')}><span>Logout</span></button>
							</div>
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
										   		<LoginPage close={this.close} />
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