import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import Bar from './PensheelApp.style';
import NewPensheelPage from './components/pages/NewPensheelPage';
import Navigation from './components/Navigation/Navigation';

const PensheelApp =({location}) =>(
	 <div>
		<Navigation />	
		 <div style={{position:'fixed'}}>
		 	<Bar />
		 </div>
	 	<GuestRoute location={location} path='/' exact component={HomePage}/>
	 	<Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />	 	
	 	<GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage}/>
	 	<UserRoute location={location} path='/dashboard' exact component={DashboardPage}/>
	 	<UserRoute location={location} path="/pensheels/new" exact component={NewPensheelPage} /> 	
	 </div>
	 );
	 
PensheelApp.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default PensheelApp;