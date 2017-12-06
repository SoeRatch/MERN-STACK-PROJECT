import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from '../../actions/auth';

const HomePage = ({isAuthenticated, logout}) => (
	<div>
		<h1> HomePage </h1>
		{ isAuthenticated? <button onClick={()=>logout()}>Logout</button>
			             : <Link to="/login"> Login </Link> }
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

export default connect(mapStateToProps{logout:actions.logout})(HomePage);







import LoginPage from './LoginPage';
import GuestRoute from '../routes/GuestRoute';
import { Icon} from 'semantic-ui-react';
import { Container} from '../../App.style'

const HomePage = ({isAuthenticated, logout, location}) =>(
	<div >


		
		{
			!isAuthenticated &&
				  <Container>
				      <GuestRoute location={location} path="/" exact component={LoginPage} />
				     <Link to='/signup'> 
					        <Icon size={'huge'} color={'grey'} name='add user' />
					     </Link>
				  </Container>
				  
				  
				
		}

		

	</div>
);
