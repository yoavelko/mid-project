import './Cart.css'
import { cartContext } from '../../Contexts/cartContext';
import { cartStyle } from '../../Contexts/cartStyle';
import { useContext, useState, useEffect } from 'react';
import RedCart from './RedCart/RedCart';
import FullStackCart from './FullStackCart/FullStackCart'
import BlueCart from './BlueCart/BlueCart'
import EssentialsCart from './EssentialsCart/EssentialsCart'

function Cart() {

    const [cartContent, setCartContent] = useState([]);
    const { cart, setCart } = useContext(cartContext);

    return (
        <div id="cart-container">
            <div id='cart-header'>הסל שלי</div>
            <div>
                {cart.map((item) => (
                    item.includes('RedTeam')
                    ? <RedCart /> :
                    item.includes('BlueTeam')
                    ? <BlueCart /> :
                    item.includes('Essentials')
                    ? <EssentialsCart /> :
                    item.includes('FullStack') 
                    && <FullStackCart />
                ))}
            </div>
        </div>
    )
}

export default Cart