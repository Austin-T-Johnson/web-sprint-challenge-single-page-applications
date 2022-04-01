import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const routeToOrderForm = () => {
        history.push("/pizza");
    }
    return (
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='../Assets/Pizza.jpg'
                alt=''
            />
            <button
                onClick={routeToOrderForm}
                id="order-pizza"
            >
                Order now!
            </button>

        </div>

    )
}