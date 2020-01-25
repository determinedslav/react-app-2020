import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home.js';
import Users from './pages/Users.js';
import Profile from './pages/Profile.js';
import Navbar from './components/Navbar.js';

const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className = "container mt-5">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
     <div>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/profile">
          <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/users">
           <Layout>
              <Users />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
