import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import AddPerson from './components/AddPerson/AddPerson';

function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/">
            <NavBar />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/add-person">
            <AddPerson />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
