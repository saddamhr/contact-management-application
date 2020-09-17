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
import AllPersons from './components/AllPersons/AllPersons'

function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/">
            <NavBar />
            <AllPersons />
          </Route>
          <Route path="/signup">
            <NavBar/>
            <SignUp />
          </Route>
          <Route path="/signin">
          <NavBar/>
            <SignIn />
          </Route>
          <Route path="/signin">
          <NavBar/>
            <SignIn />
          </Route>
          <Route path="/add-person">
          <NavBar/>
            <AddPerson />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
