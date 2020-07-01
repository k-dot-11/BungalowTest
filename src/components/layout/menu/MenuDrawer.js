import React, { useContext } from 'react';
import { Drawer, Tabs, Tab, AppBar, Toolbar, makeStyles, Hidden, List } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ThemeContext } from '../../../contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({}));

const MenuDrawer = () => {
	const classes = useStyles();
	const { isLightTheme, dark, light } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<Hidden smDown style={{backgroundColor:theme.paper}}>
			<Drawer
				variant="permanent"
				style={{backgroundColor:theme.paper}}
				
			>
				<Toolbar style={{backgroundColor:theme.paper}}/>
				<Toolbar style={{backgroundColor:theme.paper}}/>
				<div
					style={{
						flexShrink: 0,
						backgroundColor: theme.paper,
						height:'84vh',
						width:'240px'
					}}
				>
					<List>
						{[ 'STYLING krdi H ISSKI ABHI', 'KHANA', 'KHANA' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} style = {{color:theme.title}}/>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{[ 'KHANA KHANA', 'KHANA', 'KHANA' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} style = {{color:theme.syntax}}/>
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</Hidden>
	);
};

export default MenuDrawer;
