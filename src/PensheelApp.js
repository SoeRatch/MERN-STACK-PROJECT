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
import NewArticlePage from './components/pages/NewArticlePage';
import Navigation from './components/Navigation/Navigation';
import ArticlePage from './components/pages/ArticlePage';
import s from './components/style/PensheelApp.css';

const PensheelApp =({location}) =>(
	 <div>
	 	<div className={s.zigzag} />
		<Navigation />	
		 <div style={{position:'fixed'}}>
		 	<Bar className={s.bar}/>
		 </div>
	 	<GuestRoute location={location} path='/' exact component={HomePage}/>
	 	<Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />	 	
	 	<GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage}/>
	 	<UserRoute location={location} path='/dashboard' exact component={DashboardPage}/>
	 	<UserRoute location={location} path="/articles/new" exact component={NewArticlePage} /> 	
	 	<Route location={location} path="/article/:paramt" exact component={ArticlePage} /> 	
	
	 </div>
	 );
	 
PensheelApp.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default PensheelApp;