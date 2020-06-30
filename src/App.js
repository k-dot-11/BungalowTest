import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import SignInPage from "./components/screens/auth/SignInPage";
import AboutPage from "./components/screens/AboutPage";
import SignUpPage from "./components/screens/auth/SignUpPage";
import UserProvider from "./providers/UserProvider";
import MenuScreen from "./components/screens/menu/MenuScreen";
import SmallParties from "./components/screens/SmallParties";
import { auth } from "./firebase/firebase";
import Navbar from "./components/layout/navbar/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ConceptHome from "./components/screens/concept/ConceptHome";

function App() {
  return (
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
              </Route><Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeContextProvider>
    </UserProvider>
  );
}

export default App;
