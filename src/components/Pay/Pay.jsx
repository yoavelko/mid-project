import React, { useState, useContext } from 'react';
import { priceContext } from '../../Contexts/priceContext';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Pay.css'
import { Link } from 'react-router-dom';



const PaymentForm = () => {

    const { price, setPrice } = useContext(priceContext);
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    function handlePay() {
        alert('סתם סתם זה לא עובד')
    }

    return (
        <div id='pay-container'>
            <Link to='/Cart' id='go-back'><div>חזור לסל שלי</div></Link>

            <h1 className='pay-text'>בצע תשלום</h1>
            <h2 className='pay-text'>{price} :סכום לתשלום</h2>
            
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <form id='credit-container'>
                <input className='cards-input'
                    type="number"
                    name="number"
                    placeholder=" Card Number"
                    value={state.number}
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input className='cards-input'
                    type="text"
                    name="name"
                    placeholder=" Name"
                    value={state.name}
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input className='cards-input'
                    type="tel"
                    name="expiry"
                    placeholder=" Valid Thru"
                    pattern="\d\d/\d\d"
                    value={state.expiry}
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input className='cards-input'
                    type="tel"
                    name="cvc"
                    placeholder=" CVC"
                    pattern="\d{3,4}"
                    value={state.cvc}
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
            </form>
            <button id='pay-button' onClick={handlePay}>בצע תשלום</button>
        </div>
    );
}

export default PaymentForm;