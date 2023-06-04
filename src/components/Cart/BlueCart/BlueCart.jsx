import './BlueCart.css'
import { useState, useContext } from 'react'
import { cartContext } from '../../../Contexts/cartContext'
import { priceContext } from '../../../Contexts/priceContext';
import { Link } from 'react-router-dom';

function BlueCart() {

    const octEnd = '11.03.2024';
    const decEnd = '24.05.2024';
    const marchEnd = '06.06.2024';
    const [end, setEnd] = useState(octEnd);
    const { cart, setCart } = useContext(cartContext);
    const { price, setPrice } = useContext(priceContext);


    function handleSelect(e) {
        if (e.target.value === 'november') { setEnd(octEnd) }
        if (e.target.value === 'january') { setEnd(decEnd) }
        if (e.target.value === 'februar') { setEnd(marchEnd) }
    }

    function removeHandler() {
        setCart(cart.filter((value) => value != 'BlueTeam'))
    }

    function handlePrice() {
        setPrice('24,500₪')
        window.scrollTo(0, 0)
    }


    return (
        <div id='blue-first-container'>
            <div id='blue-second-container'>
                <div id='blue-cart-container'>
                    <div id='blue-cart'>
                        <img id='cyber-imgs' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/program_b_slider_icon_course.svg" alt="" />
                        <div id='blue-header'>Blue Team Defender</div>
                        <div id='blue-content'>הכשרת אנשי צוות כחול להתמודדות עם אירועי סייבר ותחקורים</div>
                    </div>
                </div>
            </div>
            <div id='blue-cart-content-container'>
                <div>Blue Team Defender :קורס</div>
                <div>
                    <select name="" id="" onChange={handleSelect}>
                        <option value="november">02.11.2023</option>
                        <option value="january">21.01.2024</option>
                        <option value="februar">12.02.2024</option>
                    </select>
                    <span> :תאריך התחלה</span>
                </div>
                <div>{end} :תאריך סיום</div>
                <div>עלות: 24,500 ש"ח</div>
                <div id='buttons-container'>
                    <Link to="/Pay">
                        <button className='cart-button' onClick={handlePrice}>לתשלום</button>
                    </Link>
                    <button className='cart-button' onClick={removeHandler}>הסר מהסל</button>
                </div>
            </div>
        </div>
    )
}

export default BlueCart