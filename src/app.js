import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'babel-polyfill';
import decode from 'jwt-decode';
import rootReducer from './rootReducer';
import PensheelApp from './PensheelApp';
import {userLoggedIn} from './actions/auth';
import setAuthorizationHeader from './utils/setAuthorizationHeader';


const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.PensheelJWT){
	const payload = decode(localStorage.PensheelJWT)
	const user ={ 
		token: localStorage.PensheelJWT,
		email: payload.email,
		confirmed: payload.confirmed
		};
	setAuthorizationHeader(localStorage.PensheelJWT);
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={PensheelApp}/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('AppRoot')
);