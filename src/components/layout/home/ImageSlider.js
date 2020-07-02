import { Fade } from 'react-slideshow-image';
import React from 'react';

const ImageSlider = () => {
	const images = [
		'https://source.unsplash.com/1920x1080/?curry',
		'https://source.unsplash.com/1920x1080/?burger',
		'https://source.unsplash.com/1920x1080/?pizza',
		'https://source.unsplash.com/1920x1080/?chicken'
	];
	const properties = {
		duration: 3000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: true,
		pauseOnHover: true,
		onChange: (oldIndex, newIndex) => {}
	};

	return (
		<div style={{ width: '70vw' }}>
			<Fade {...properties}>
				<div
					style={{
						padding: '20px',
						fontSize: '20px',
						textAlign: 'center'
					}}
				>
					<img
						src={require('../../../assets/carousel1.jpeg')}
						style={{ width: '100vw', height: 'auto', maxHeight: '600px' }}
					/>
				</div>
				<div
					style={{
						padding: '20px',
						fontSize: '20px',
						textAlign: 'center'
					}}
				>
					<img
						src={require('../../../assets/carousel2.jpeg')}
						style={{ width: '100vw', height: 'auto', maxHeight: '600px' }}
					/>
				</div>
				<div
					style={{
						padding: '20px',
						fontSize: '20px',
						textAlign: 'center'
					}}
				>
					<img
						src={require('../../../assets/carousel3.png')}
						style={{ width: '100vw', height: 'auto', maxHeight: '600px' }}
					/>
				</div>
			</Fade>
		</div>
	);
};

export default ImageSlider;
