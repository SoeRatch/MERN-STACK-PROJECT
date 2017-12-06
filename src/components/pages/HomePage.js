import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const HomePage = ({isAuthenticated}) => (
	<div>
		<h1> HomePage </h1>
		{ isAuthenticated? <button>Logout</button>
			             : <Link to="/login"> Login </Link> }
	</div>
);

function mapStateToProps(state){
	return {
		isAuthenticated:!!state.user.token
	}
}

HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(HomePage);





