import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from '../../actions/auth';
import Try from './Try';

const HomePage = ({isAuthenticated, logout}) => (
	<div >
		<h1> HomePage </h1>
		{ isAuthenticated? <button onClick={()=>logout()}>Logout</button>
			             : <div><Link to="/login"> Login </Link> or <Link to="/signup"> Signup </Link></div> }
	
		<Try />
		

	</div>
);



function mapStateToProps(state){
	return {
		isAuthenticated:!!state.user.token
	}
}

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{logout:actions.logout})(HomePage);





