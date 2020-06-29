import React, { useState, useEffect, useContext } from 'react';

import { Drawer, Tabs, Tab, AppBar, Toolbar, makeStyles, Hidden } from '@material-ui/core';
import { firestore } from '../../../firebase/firebase';
import { ThemeContext } from '../../../contexts/ThemeContext';
import MenuGrid from '../../layout/menu/MenuGrid';
import FooterBungalow from '../../layout/home/FooterBungalow';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuDrawer from '../../layout/menu/MenuDrawer';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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
	};
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '99vw',
				backgroundColor: theme.bg,
				minHeight: 'sm'
			}}
		>
			<AppBar className={classes.appBar} position={'sticky'} style={{top:'56px',left:'0px',right:'0px', backgroundColor: 'tomato' }}>
				<Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example">
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
			<FooterBungalow />
		</div>
	);
};

export default MenuScreen;
