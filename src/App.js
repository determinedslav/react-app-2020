import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'


import Home from './pages/Home.js';
import Users from './pages/Users.js';
import Profile from './pages/Profile.js';
import Navbar from './components/Navbar.js';
import reducers from './redux/index.js';

const store = createStore(reducers);

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
    <Provider store={store}>
     <Router >
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
    </Provider>
  );
}

export default App;
