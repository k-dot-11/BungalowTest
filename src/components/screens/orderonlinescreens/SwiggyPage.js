import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Container, Grid,Button } from '@material-ui/core';

const SwiggyPage = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
            <img src={require('../../../assets/swiggy.png')} style={{height:'50vh' , width:'100vw'}}/>
		</div>
	);
};

export default SwiggyPage;
