import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
