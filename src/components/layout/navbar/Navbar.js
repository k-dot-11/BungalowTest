import React, { useContext, useState } from "react";
import {
  Button,
  Link,
  makeStyles,
  Hidden,
  IconButton,
  Drawer,
  List,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { UserContext } from "../../../providers/UserProvider";
import { auth } from "../../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Navbar = () => {
  const user = useContext(UserContext);
  const classes = useStyles();
  const [navBarOpen, setNavBarOpen] = useState(false);

  const NavDrawer = () => {
    return (
      <Hidden mdUp>
        <Drawer
          md={12}
          xs={12}
          variant="temporary"
          anchor="right"
          open={navBarOpen}
          style={{
            width: "0%",
            flexShrink: 0,
            backgroundColor: "#444",
          }}
        >
          <Toolbar />
          <Toolbar />
          <div>
            <List>
              {["STYLING KRNI H ISSKI ABHI", "CLOSE", "CLOSE"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={() => setNavBarOpen(false)}
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

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        const styles = {
          appBar: {
            display: "flex",
            backgroundColor: theme.primary,
            flex: 1,
          },

          appBarTitle: {
            textAlign: "left",
            flex: 1,
            fontSize: "20px",
          },

          cameraIcon: {
            marginRight: "10px",
          },

          navLinks: {
            color: "white",
            marginLeft: "10px",
          },

          loginButton: {
            marginLeft: "15px",
            borderColor: "white",
            borderWidth: "1/2px",
            borderRadius: "20px",
            color: "white",
          },
        };
        return (
          <AppBar
            position="relative"
            style={styles.appBar}
            className={classes.appBar}
          >
            <Toolbar>
              <LocalPizzaIcon style={styles.cameraIcon} />
              <Link
                href="/"
                variant="text"
                color="inherit"
                noWrap
                style={styles.appBarTitle}
              >
                The Bungalow
              </Link>

              <Hidden mdUp>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => setNavBarOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <NavDrawer />
              </Hidden>

              <Hidden smDown>
                <nav>
                  <Button
                    href="/"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                  >
                    Home
                  </Button>
                  <Button
                    href="/menu"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                  >
                    Menu
                  </Button>
                  <Button
                    href="https://www.zomato.com/udaipur/the-bungalow-udaipur-panchwati"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                  >
                    Order Online
                  </Button>
                  <Button
                    href="/about"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                  >
                    About
                  </Button>
                  <Button
                    href="/signin"
                    onClick={() => {
                      user
                        ? auth
                            .signOut()
                            .then(() => console.log("User signed out!"))
                        : console.log("Going to signin page");
                    }}
                    color="primary"
                    variant="outlined"
                    style={styles.loginButton}
                  >
                    {user ? "Sign Out" : "Sign In"}
                  </Button>
                </nav>
              </Hidden>
            </Toolbar>
          </AppBar>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
