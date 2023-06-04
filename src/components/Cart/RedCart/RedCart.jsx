import './RedCart.css'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from '../../../Contexts/cartContext'
import { priceContext } from '../../../Contexts/priceContext';
import { Link } from 'react-router-dom';

function RedCart() {

    const octEnd = '19.02.2024';
    const decEnd = '07.04.2024';
    const marchEnd = '28.07.2024';
    const [end, setEnd] = useState(octEnd);
    const { cart, setCart } = useContext(cartContext);
    const { price, setPrice } = useContext(priceContext);


    function handleSelect(e) {
        if (e.target.value === 'october') { setEnd(octEnd) }
        if (e.target.value === 'december') { setEnd(decEnd) }
        if (e.target.value === 'march') { setEnd(marchEnd) }
    }

    function removeHandler() {
        setCart(cart.filter((value) => value != 'RedTeam'))
    }

    function handlePrice() {
        setPrice('26,000₪')
        window.scrollTo(0, 0)
    }

    return (
        <div id='red-first-container'>
            <div id='red-second-container'>
                <div id='red-cart-container'>
                    <div id='red-cart'>
                        <img id='cyber-imgs' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/12/program_r_slider_icon_course_v0.1.svg" alt="" />
                        <div id='red-header'>Red Team Expert</div>
                        <div id='red-content'>הכשרת אנשי צוות אדום לבדיקות חדירה בתשתיות ובמערכות מידע</div>
                    </div>
                </div>
            </div>
            <div id='red-cart-content-container'>
                <div>Red Team Expert :קורס</div>
                <div>
                    <select name="" id="" onChange={handleSelect}>
                        <option value="october">16.10.2023</option>
                        <option value="december">07.12.2023</option>
                        <option value="march">03.03.2024</option>
                    </select>
                    <span> :תאריך התחלה</span>
                </div>
                <div>{end} :תאריך סיום</div>
                <div>עלות: 26,000 ש"ח</div>
                <div id='buttons-container'>
                    <Link to="/Pay" price='26,000'>
                        <button className='cart-button' onClick={handlePrice}>לתשלום</button>
                    </Link>
                    <button className='cart-button' onClick={removeHandler}>הסר מהסל</button>
                </div>
            </div>
        </div>
    )
}

export default RedCart