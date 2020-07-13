import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import SignInPage from "./components/screens/auth/SignInPage";
import AboutPage from "./components/screens/AboutPage";
import SignUpPage from "./components/screens/auth/SignUpPage";
import UserProvider from "./providers/UserProvider";
import MenuScreen from "./components/screens/menu/MenuScreen";
import SmallParties from "./components/screens/SmallParties";
import Navbar from "./components/layout/navbar/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import CateringScreen from "./components/screens/menu/CateringScreen";
import ConceptHome from "./components/screens/concept/ConceptHome";
import ContactUs from "./components/screens/ContactUs";
import OrderOnlinePage from "./components/screens/orderonlinescreens/OrderOnlinePage";
import CateringOrParty from "./components/screens/CateringOrParty";

function App() {
  return (
    <>
      <meta charset="utf-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="description" content=""></meta>
      <UserProvider>
        <ThemeContextProvider>
          <Router>
            <div
              className="App"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Navbar />
              <Switch>
                <Route path="/signin">
                  <SignInPage />
                </Route>
                <Route path="/signup">
                  <SignUpPage />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/menu">
                  <MenuScreen />
                </Route>
                <Route path="/smallparties">
                  <SmallParties />
                </Route>
                <Route path="/concepthome">
                  <ConceptHome />
                </Route>
                <Route path="/catering">
                  <CateringScreen />
                </Route>
                <Route path="/contactus">
                  <ContactUs />
                </Route>
                <Route path="/cateringorparty">
                  <CateringOrParty />
                </Route>
                <Route path="/orderonline">
                  <OrderOnlinePage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeContextProvider>
      </UserProvider>
    </>
  );
}

export default App;
