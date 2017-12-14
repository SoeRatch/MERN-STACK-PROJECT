import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from './title/Title';
import Iconn from './Iconn/Iconn';
import Navigationstyle from './Navigation.style'

const Navigation =({location})=>(
		<div style={{height:'80px'}} >
			<Navigationstyle >
					<Title/>
					<Route location={location} path='/' component={Iconn}/>
			</Navigationstyle>
		</div>
);

Navigation.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default Navigation;