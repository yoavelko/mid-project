import './Cart.css'
import { cartContext } from '../../Contexts/cartContext';
import { cartStyle } from '../../Contexts/cartStyle';
import { useContext , useState } from 'react';
import RedCart from './RedCart/RedCart';

function Cart() {

    const [cartContent, setCartContent] = useState([<RedCart/>])
    
    return (
        <div id="cart-container">
            <div id='cart-header'>הסל שלי</div>
            <div>{cartContent}</div>
        </div>
    )
}

export default Cart