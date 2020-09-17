import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TestContainer from './components/TestContainer/TestContainer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

// React Route
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoFound from './components/NoFound/NoFound';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}

      <Header></Header>

      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/search">
            <Search></Search>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoFound></NoFound>
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
