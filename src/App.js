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
<<<<<<< HEAD
import { CateringScreen } from "./components/screens/menu/CateringScreen";
=======
import ConceptHome from "./components/screens/concept/ConceptHome";
>>>>>>> 89e757075c6506b6d5350f3022ddef2d8180d58a

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
<<<<<<< HEAD
              <Route path="/catering">
                <CateringScreen />
              </Route>
              <Route path="/">
=======
              <Route path="/smallparties">
                <SmallParties />
              </Route>
              <Route path="/concepthome">
                <ConceptHome />
              </Route><Route path="/">
>>>>>>> 89e757075c6506b6d5350f3022ddef2d8180d58a
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
