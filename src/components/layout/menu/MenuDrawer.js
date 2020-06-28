import React from 'react';
import { Drawer, Tabs, Tab, AppBar, Toolbar, makeStyles, Hidden, List } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	drawer: {
		width: 240,
		flexShrink: 0
	},
	drawerPaper: {
		width: 240
	},
	drawerContainer: {
		overflow: 'auto'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(4)
	}
}));

const MenuDrawer = () => {
	const classes = useStyles();

	return (
		<Hidden smDown>
			<Drawer
				variant="permanent"
				style={{
					flexShrink: 0,
					backgroundColor: '#444'
				}}
			>
				<Toolbar />
				<Toolbar />
				<div>
					<List>
						{[ 'STYLING KRNI H ISSKI ABHI', 'KHANA', 'KHANA' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{[ 'KHANA KHANA', 'KHANA', 'KHANA' ].map((text, index) => (
							<ListItem button key={text}>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</Hidden>
	);
};

export default MenuDrawer;
