import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import PensheelApp from './PensheelApp';
import {userLoggedIn} from './actions/auth';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.bookwormJWT){
	const user ={ 
		token: localStorage.bookwormJWT
		};
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<PensheelApp/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('AppRoot')
);