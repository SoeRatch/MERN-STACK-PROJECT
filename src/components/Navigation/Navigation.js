import React from 'react';
import Title from './title/Title';
import Iconn from './Iconn/Iconn';
import Navigationstyle from './Navigation.style'

const Navigation =()=>(
		<div style={{height:'100px'}} >
			<Navigationstyle >
					<Title/>
					<Iconn/>
					<Iconn/>
		
			</Navigationstyle>
		</div>
);

export default Navigation;