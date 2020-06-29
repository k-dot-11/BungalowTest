import React from "react";
import {
  Drawer,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  makeStyles,
  Hidden,
  List,
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const NavDrawer = (props) => {
  return (
    <Hidden mdUp>
      <Drawer
        md={12}
        xs={12}
        variant="temporary"
        anchor="right"
        open={props.navOpen}
        style={{
          flexShrink: 0,
          backgroundColor: "#444",
        }}
      >
        <Toolbar />
        <Toolbar />
        <div
					style={{
						flexShrink: 0,
						backgroundColor: theme.bg,
						height:'86vh',
						width:'240px'
					}}
				>
          <List>
            {["STYLING KRNI H ISSKI ABHI", "KHANA", "KHANA"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => console.log("HELLO")}
                >
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["KHANA KHANA", "KHANA", "KHANA"].map((text, index) => (
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

export default NavDrawer;
