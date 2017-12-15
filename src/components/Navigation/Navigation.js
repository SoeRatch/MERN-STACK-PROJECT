import React from 'react';
import Title from './title/Title';
import Iconn from './Iconn/Iconn';
import Navigationstyle from './Navigation.style'
import flex from '../style/Flex.css';

const Navigation =()=>(
		<div>
			<div style={{height:'80px'}} >
				<Navigationstyle className={flex.flexRowContainer}>
						<Title/>
						<Iconn/>
				</Navigationstyle>
			</div>
		</div>
);



export default Navigation;