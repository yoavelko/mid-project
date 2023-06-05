import React, { useState, useContext, useEffect } from 'react';
import { priceContext } from '../../Contexts/priceContext';
import { userIndexContext } from '../../Contexts/userIndexContext';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Pay.css'
import { Link } from 'react-router-dom';
import usersData from '../Data/users.json'



const PaymentForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('')
    const { price, setPrice } = useContext(priceContext);
    const { userIndex , setUserIndex } = useContext(userIndexContext);
    const [course, setCourse] = useState('')
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

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    useEffect(()=>{
        if (price === '26,000₪') {
            setCourse('RedTeam')
        } if (price === '38,000₪') {
            setCourse('FullStack')
        } if (price === '18,000₪') {
            setCourse('Essentials')
        } if (price === '24,500₪') {
            setCourse('BlueTeam')
        }
    }, [])
   

    function handlePay() {
        const user = usersData && usersData.users.find(
            (u) => u.username === username
        );
        if (user) {
            setError('');
            alert('שולם ימנאייק');
            for (let i = 0; i < usersData.users.length; i++) {
                if (usersData.users[i].username === username) {
                    usersData.users[i].course = course
                }
            }
        } 
        else if (usersData.admin.username === username) {
            setError('');
            alert('שולם ימנאייק');
        }
         else {
            setError('שם משתמש לא קיים במערכת');
        }
    };


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
        <div style={{color:'red'}}>{error}</div>
        <form id='credit-container'>
            <input
                className='cards-input'
                type="number"
                name="number"
                placeholder=" Card Number"
                value={state.number}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                className='cards-input'
                type="text"
                name="name"
                placeholder=" Name"
                value={state.name}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                className='cards-input'
                type="tel"
                name="expiry"
                placeholder=" Valid Thru"
                pattern="\d\d/\d\d"
                value={state.expiry}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                className='cards-input'
                type="tel"
                name="cvc"
                placeholder=" CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
            />
            <input
                className='cards-input'
                type="text"
                name='username'
                placeholder=' Username'
                onChange={handleUsernameChange}
            />
        </form>
        <button id='pay-button' onClick={handlePay}>בצע תשלום</button>
    </div>
);
}

export default PaymentForm;