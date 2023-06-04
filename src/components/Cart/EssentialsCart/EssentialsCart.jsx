import './EssentialsCart.css'
import { useState, useContext } from 'react'
import { cartContext } from '../../../Contexts/cartContext'
import { Link } from 'react-router-dom';
import { priceContext } from '../../../Contexts/priceContext'


function EssentialsCart() {

    const augEnd = '14.12.2023';
    const septEnd = '27.01.2024';
    const novEnd = '16.05.2024';
    const [end, setEnd] = useState(augEnd);
    const { cart, setCart } = useContext(cartContext);
    const { price, setPrice } = useContext(priceContext);


    function handleSelect(e) {
        if (e.target.value === 'august') { setEnd(augEnd) }
        if (e.target.value === 'september') { setEnd(septEnd) }
        if (e.target.value === 'november') { setEnd(novEnd) }
    }

    function removeHandler() {
        setCart(cart.filter((value) => value != 'Essentials'))
    }

    function handlePrice() {
        setPrice('18,000₪')
        window.scrollTo(0, 0)
    }


    return (
        <div id='essentials-first-container'>
            <div id='essentials-second-container'>
                <div id='essentials-cart-container'>
                    <div id='essentials-cart'>
                        <img id='cyber-imgs' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/12/program_e_slider_icon_course_v0.1.svg" alt="" />
                        <div id='essentials-header'>Cyber Essentials</div>
                        <div id='essentials-content'>הכשרה לטכנולוגיות הליבה של עולם הסייבר</div>
                    </div>
                </div>
            </div>
            <div id='essentials-cart-content-container'>
                <div>Cyber Essentials :קורס</div>
                <div>
                    <select name="" id="" onChange={handleSelect}>
                        <option value="august">17.08.2023</option>
                        <option value="september">04.09.2023</option>
                        <option value="november">28.11.2023</option>
                    </select>
                    <span> :תאריך התחלה</span>
                </div>
                <div>{end} :תאריך סיום</div>
                <div>עלות: 18,000 ש"ח</div>
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

export default EssentialsCart