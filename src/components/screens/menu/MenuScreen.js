import React, { useContext } from 'react';

import { Tabs, Tab, AppBar, makeStyles, Hidden } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';
import MenuGrid from '../../layout/menu/MenuGrid';
import FooterBungalow from '../../layout/home/FooterBungalow';

import MenuDrawer from '../../layout/menu/MenuDrawer';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{children}
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	}
}));

const MenuScreen = () => {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		window.scrollTo(0,0)
	};
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100vw',
				backgroundColor: theme.bg,
				minHeight: 'sm'
			}}
		>
			<Hidden smDown>
				<AppBar
					className={classes.appBar}
					position={'sticky'}
					style={{ top: '64px', left: '0px', right: '0px', backgroundColor: 'tomato' }}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="white"
						centered
						aria-label="simple tabs example"
					>
						<Tab label="Main Course (Veg)" />
						<Tab label="Beverages" />
						<Tab label="Starters" />
						<Tab label="Breads" />
						<Tab label="Desserts" />
					</Tabs>
				</AppBar>
				<MenuDrawer />
				<TabPanel value={value} index={0}>
					<MenuGrid name="MainCourse" image="curry" />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<MenuGrid name="Bar" image="drinks" />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<MenuGrid name="Starters" image="salad" />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<MenuGrid name="Breads" image="chapati" />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<MenuGrid name="Desserts" image="dessert" />
				</TabPanel>
			</Hidden>
			<Hidden mdUp>
				<AppBar
					className={classes.appBar}
					position={'sticky'}
					style={{ top: '56px', left: '0px', right: '0px', backgroundColor: 'tomato' }}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
						aria-label="simple tabs example"
						variant="scrollable"
						scrollButtons="auto"
					>
						<Tab label="Main Course (Veg)" />
						<Tab label="Beverages" />
						<Tab label="Starters" />
						<Tab label="Breads" />
						<Tab label="Desserts" />
					</Tabs>
				</AppBar>
				<MenuDrawer />
				<TabPanel value={value} index={0}>
					<MenuGrid name="MainCourse" image="curry" />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<MenuGrid name="Bar" image="drinks" />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<MenuGrid name="Starters" image="salad" />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<MenuGrid name="Breads" image="chapati" />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<MenuGrid name="Desserts" image="dessert" />
				</TabPanel>
			</Hidden>
			<FooterBungalow />
		</div>
	);
};

export default MenuScreen;
