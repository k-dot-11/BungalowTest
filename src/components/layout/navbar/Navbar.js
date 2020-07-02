import React, { useContext, useState } from "react";
import {
  Button,
  Link,
  makeStyles,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItemIcon,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
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
                height: "20px",
                borderRadius: "10px",
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
                <ListItemIcon
                  style={{ paddingRight: "20%", paddingLeft: "5%" }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  align="left"
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
                <ListItemIcon
                  style={{ paddingRight: "20%", paddingLeft: "5%" }}
                >
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText align="left" primary="MENU" />
              </ListItem>
              <ListItem
                button
                component="a"
                style={{ color: theme.syntax }}
                href="/cateringorparty"
              >
                <ListItemIcon
                  style={{ paddingRight: "20%", paddingLeft: "5%" }}
                >
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText
                  align="left"
                  style={{ color: theme.syntax }}
                  primary="CATERING"
                />
              </ListItem>
              <ListItem
                button
                component="a"
                style={{ color: theme.syntax }}
                href="/about"
              >
                <ListItemIcon
                  style={{ paddingRight: "20%", paddingLeft: "5%" }}
                >
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText
                  align="left"
                  style={{ color: theme.syntax }}
                  primary="ABOUT"
                />
              </ListItem>
              <ListItem
                button
                style={{ color: theme.syntax }}
                component="a"
                href="/orderonline"
              >
                <ListItemIcon
                  style={{ paddingRight: "20%", paddingLeft: "5%" }}
                >
                  <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText
                  align="left"
                  primary="ORDER NOW"
                  style={{ color: theme.syntax }}
                />
              </ListItem>
              <br />
              <div
                style={{
                  display: "flex",
                  paddingLeft: "41%",

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
        const { toggleTheme, isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        const styles = {
          appBar: {
            display: "flex",
            backgroundColor: theme.primary,
            flex: 1,
            width: "100vw",
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
              <LocalPizzaIcon style={styles.cameraIcon} onClick={toggleTheme} />
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
                    startIcon={<HomeIcon />}
                  >
                    Home
                  </Button>
                  <Button
                    href="/menu"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                    startIcon={<MenuBookIcon />}
                  >
                    Menu
                  </Button>
                  <Button
                    href="/orderonline"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                    startIcon={<ShoppingBasketIcon />}
                  >
                    Order Online
                  </Button>
                  <Button
                    color="primary"
                    variant="text"
                    href="/cateringorparty"
                    style={styles.navLinks}
                    startIcon={<RestaurantMenuIcon />}
                  >
                    Catering
                  </Button>
                  <Button
                    href="/about"
                    color="primary"
                    variant="text"
                    style={styles.navLinks}
                    startIcon={<InfoIcon />}
                  >
                    About
                  </Button>

                  <Button
                    startIcon={<AccountCircleIcon />}
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
