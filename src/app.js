import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import PensheelApp from './PensheelApp';


ReactDOM.render(
	<BrowserRouter>
		<PensheelApp/>
	</BrowserRouter>,
	document.getElementById('AppRoot')
);