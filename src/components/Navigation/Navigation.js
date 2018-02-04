import React from 'react';
import Title from './title/Title';
import Iconn from './Iconn/Iconn';
import Navigationstyle from './Navigation.style'
import flex from '../style/Flex.css';
import s from '../style/Navigation.css';

const Navigation =()=>(
		<div>
			<div className={s.navigation} >
				<Navigationstyle className={[flex.flexRowContainer,s.nav].join(' ')}>
						<Title/>
						<Iconn/>
				</Navigationstyle>
			</div>
		</div>
);



export default Navigation;