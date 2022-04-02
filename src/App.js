import React, { useState } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import OrderForm from './OrderForm';

const initialFormValues = {
  name: '',
  size: '',
  instructions: '',
  pepperoni: false,
  sausage: false,
  spicyItalianSausage: false,
  grilledChicken: false
}

const initialPizzaOrders = ""

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormError] = useState("");
  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders)


  const postPizzaOrder = newPizzaOrder => {
    axios.post("https://reqres.in/api/orders", newPizzaOrder)
      .then(res => {
        console.log(res.data)
        setPizzaOrders(res.data)
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))

  }

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {

    const newPizzaOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      instructions: formValues.instructions.trim(),
      toppings: [
        "pepperoni",
        "sausage",
        "spicy italian sausage",
        "grilled chicken"
      ]
        .filter(topping => !!formValues[topping])
    }
    postPizzaOrder(newPizzaOrder);
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
          <OrderForm submit={submitForm} values={formValues} update={updateForm} setFormError={setFormError} />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </>

  );
};
export default App;
