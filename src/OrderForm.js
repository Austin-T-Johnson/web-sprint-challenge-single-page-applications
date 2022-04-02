import React from 'react';


export default function OrderForm(props) {
    const {
        values,
        submit,
        update,
        change
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
       const valueToUse = type === "checkbox" ? checked : value
        update(name, valueToUse);
       
        console.log(name, value)

        if (name === "name") {
            if (value.length < 2) {
                props.setFormError("name must be at least 2 characters")
                return;
            } else {
                props.setFormError("")
            }
        }
    }

    return (

        // name input //

        <form id="pizza-form" onSubmit={onSubmit}>
            <input
                id="name-input"
                type="text"
                placeholder="Enter your name"
                onChange={onChange}
                value={values.name}
                name="name"
            />

            {/* Size of pizza choice */}

            <label>Choice of size
                <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                    <option value="">-- Select size of pizza --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </label>

            {/* Choose toppings */}

            <h3>Add Toppings</h3>
            <p>Choose up to 5</p>

            <label>Pepperoni
                <input
                    type="checkbox"
                    name="pepperoni"
                    onChange={onChange}
                    checked={values.pepperoni}
                />
            </label>
            <label>Sausage
                <input
                    type="checkbox"
                    name="sausage"
                    onChange={onChange}
                    checked={values.sausage}
                />
            </label>
            <label>Spicy Italian Sausage
                <input
                    type="checkbox"
                    name="spicyItalianSausage"
                    onChange={onChange}
                    checked={values.spicyItalianSausage}
                />
            </label>
            <label>Grilled Chicken
                <input
                    type="checkbox"
                    name="grilledChicken"
                    onChange={onChange}
                    checked={values.grilledChicken}
                />
            </label>

            {/* Special Instructions Input */}

            <h3>Special Instructions</h3>

            <input
                id="special-text"
                type="text"
                placeholder="Any special instructions?"
                name="instructions"
                value={values.instructions}
                onChange={onChange}
            />

            {/* Submit Button */}
            <button id="order-button">Submit Order</button>

        </form>




    )


}