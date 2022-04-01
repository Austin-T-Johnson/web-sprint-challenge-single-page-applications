import React, { useState } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import OrderForm from './OrderForm';

const initialFormValues = {
  name: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState("");


  const submitForm = () => {
  const newOrder = {
    name: formValues.name.trim()
  }
  if (!newOrder.name) {
    setFormError("name must be at least 2 characters")
    return;
  }
}
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You're favorite food delivered while coding</p>

      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>
      <p className="error">{formError}</p>
      <Switch>
        <Route path="/pizza">
          <OrderForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </>

  );
};
export default App;
