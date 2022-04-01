import React, { useState } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';

const App = () => {




  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You're favorite food delivered while coding</p>
      
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link>Order</Link>
      </div>

    <Switch>
      <Route path="/">
        <Home />
      </Route>

    </Switch>
    </>

  );
};
export default App;
