import React , {useContext} from 'react';
import { Parallax, Background } from 'react-parallax';
import Hero from '../../layout/home/Hero';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import OdeToFood from '../../layout/home/OdeToFood';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Typography, Button } from '@material-ui/core';

const ConceptHome = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Hero />
			<Parallax
				blur={10}
				bgImage={require('../../../assets/concept1.jpeg')}
				bgImageAlt="the cat"
				style={{
					width: '99vw',
					height: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				strength={300}
			>
				<div style={{ padding: '300px' }}>
					<Typography variant="body1" style={{ color: 'white' }} gutterBottom align="center">
						The award winning vegetarian restaurant that you cherished for long is now back in an all new
						format, delivering deliciousness directly to your doorstep. Come, join us as we continue to
						celebrate this ode to food.
						<br />
						<br />
						__________________
					</Typography>
					<Typography
						variant="h3"
						style={{ color: 'white', fontWeight: 'bold' }}
						component="h2"
						align="center"
					>
						An Ode to Food
						<br />
						<LocalPizzaIcon align="center" />
						<br />
						<br />
					</Typography>
					<Typography
						variant="h5"
						style={{ color: 'white', fontStyle: 'italic' }}
						component="p"
						align="center"
					>
						The Colours of festivity, the sounds of joy, the flowers of friendship topped with the
						irresistable taste of authentic vegetarian delicacies You are invited to savour the experience
						with all your senses With family and friends, day after day & Make life a celebration!
					</Typography>
				</div>
			</Parallax>
			<Parallax
				blur={3}
				bgImage={require('../../../assets/concept2.jpeg')}
				bgImageAlt="the cat"
				style={{
					width: '99vw',
					height: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				strength={500}
			>
				<Typography align="center" variant="h2" style={{ color: theme.primary, fontWeight: 'bold' }}>
					Order Online <br />
				</Typography>
				<div style={{ margin: '10px' }}>
					<Typography align="center" style={{ color: theme.syntax, size: '30px' }}>
						________<br />
						<br />
						Hungry? Bored? Excited? Tasty food satiates all. Order from the Time Tested yet New, Award
						Winning yet Evolving, Exotic yet Affordable but always delicious food from Utsav.<br />
						<br />
					</Typography>
				</div>
				<br />
				<Button
					size="large"
					href="/concepthome"
					variant="outlined"
					style={{ color: theme.primary, borderColor: theme.primary }}
				>
					Order Online
				</Button>
			</Parallax>
			<Parallax
				blur={3}
				bgImage={require('../../../assets/concept3.jpeg')}
				bgImageAlt="the cat"
				style={{
					width: '99vw',
					height: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				strength={500}
			/>
			<Parallax
				blur={3}
				bgImage={require('../../../assets/concept1.jpeg')}
				bgImageAlt="the cat"
				style={{
					width: '99vw',
					height: '80vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				strength={500}
			/>
		</div>
	);
};

export default ConceptHome;
