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

            <label>Choice of size
                <select id="size-dropdown">
                    <option value="">-- Select size of pizza --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>

            </label>




        </form>




    )


}