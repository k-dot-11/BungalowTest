import React, { useContext } from "react";
import {
  Tabs,
  Tab,
  AppBar,
  makeStyles,
  Hidden,
  Typography,
} from "@material-ui/core";
import { ThemeContext } from "../../../contexts/ThemeContext";
import SwiggyPage from "./SwiggyPage";
import ZomatoPage from "./ZomatoPage";
import TheBungalow from "./TheBungalow";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
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
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const OrderOnlinePage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundColor: theme.bg,
        minHeight: "sm",
      }}
    >
      <AppBar
        className={classes.appBar}
        position={"sticky"}
        style={{
          top: "55px",
          left: "0px",
          right: "0px",
          backgroundColor: "tomato",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          centered
          aria-label="simple tabs example"
        >
              <Tab label="Zomato" />
          <Tab label="Swiggy" />
          <Tab label="The Bungalow" />
      
        </Tabs>
      </AppBar>
    
      <TabPanel value={value} index={0}>
        <ZomatoPage />
      </TabPanel>
     
      <TabPanel value={value} index={1}>
        <SwiggyPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TheBungalow />
      </TabPanel>
    </div>
  );
};

export default OrderOnlinePage;
