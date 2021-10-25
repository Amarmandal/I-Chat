import React from 'react';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
