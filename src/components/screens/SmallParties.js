import React from 'react';
import PartyHome from '../layout/smallparties/PartyHome';
import FooterBungalow from '../layout/home/FooterBungalow';
const SmallParties = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <br/>
            <br/>
            <div style={{display:'flex' , justifyContent: 'center'}}>
			<PartyHome />
            <br/>
            </div>
            <br/>
            <br/>

			<FooterBungalow />
		</div>
	);
};

export default SmallParties;
