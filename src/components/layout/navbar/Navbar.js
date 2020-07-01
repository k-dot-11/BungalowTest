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
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

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
            flexShrink: 0,
            width: "70vw",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.paper,
            }}
          >
            <Button
              style={{
                margin: "30px",

                width: "20px",
                height: "40px",
                borderRadius: "40px",
                align: "center",
                color: theme.title,
              }}
              onClick={() => setNavBarOpen(false)}
            >
              X
            </Button>
          </div>

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.paper,
              height: "100vh",
              width: "70vw",
            }}
          >
            <List>
              <ListItem button component="a" href="/">
                <ListItemText
                  align="center"
                  style={{ color: theme.syntax }}
                  primary="HOME"
                />
              </ListItem>
              <ListItem
                button
                component="a"
                style={{ color: theme.syntax }}
                href="/menu"
              >
                <ListItemText align="center" primary="MENU" />
              </ListItem>
              <ListItem
                button
                component="a"
                style={{ color: theme.syntax }}
                href="/about"
              >
                <ListItemText
                  align="center"
                  style={{ color: theme.syntax }}
                  primary="ABOUT"
                />
              </ListItem>
              <ListItem
                button
                style={{ color: theme.syntax }}
                component="a"
                href="https://www.zomato.com/udaipur/the-bungalow-udaipur-panchwati"
              >
                <ListItemText
                  align="center"
                  primary="ORDER NOW"
                  style={{ color: theme.syntax }}
                />
              </ListItem>
              <br></br>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.paper,
                }}
              >
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
                  style={{
                    alignSelf: "center",
                    borderColor: "TOMATO",
                    borderWidth: "1/2px",
                    borderRadius: "20px",
                    color: "tomato",
                  }}
                >
                  {user ? "Sign Out" : "Sign In"}
                </Button>
              </div>
            </List>
            <Divider />
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
            position="sticky"
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
