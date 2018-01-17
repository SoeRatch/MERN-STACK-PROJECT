import React from 'react';
import Title from './title/Title';
import Iconn from './Iconn/Iconn';
import Navigationstyle from './Navigation.style'
import flex from '../style/Flex.css';
import s from '../style/Navigation.css';

const Navigation =()=>(
		<div>
			<div style={{height:'80px'}} >
				<Navigationstyle className={[flex.flexRowContainer, s.navigation].join(' ')}>
						<Title/>
						<Iconn/>
				</Navigationstyle>
			</div>
		</div>
);



export default Navigation;