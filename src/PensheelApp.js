import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const PensheelApp =() =>(
	 <div>
	 	<Route path='/' exact component={HomePage}/>
	 	<Route path='/login' exact component={LoginPage}/>
	 </div>
	 );
	 
export default PensheelApp;