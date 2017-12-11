import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import Navigation from './components/Navigation/Navigation';

const PensheelApp =({location}) =>(
	 <div>
	 	<Navigation />
	 	<Route location={location} path='/' exact component={HomePage}/>
	 	<Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />	 	
	 	<GuestRoute location={location}  path='/login' exact component={LoginPage}/>
	 	<GuestRoute location={location}  path='/signup' exact component={SignupPage}/>
	 	<GuestRoute location={location}  path='/forgot_password' exact component={ForgotPasswordPage}/>
	 	<GuestRoute location={location}  path='/reset_password/:token' exact component={ResetPasswordPage}/>
	 	<UserRoute location={location}  path='/dashboard' exact component={DashboardPage}/>
	 </div>
	 );
	 
PensheelApp.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default PensheelApp;