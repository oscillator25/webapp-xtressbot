import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
//import Dashboard from './content/Dashboard'
import LandingPage from './content/LandingPage';
import Login from './content/Login';
//import Onboard from './content/Onboard'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
