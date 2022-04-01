import React from 'react';
import { useHistory } from "react-router-dom";

export default function OrderForm() {

const onChange = evt => {
    const name = evt.target.name;
}

    return (
        <form id="pizza-form">
        <input 
        id="name-input"
        type="text"
        placeholder="Enter your name"
        onChange={onChange}
        />
            
        




        </form>




    )


}