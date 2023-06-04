import './FullStackCart.css'
import { useState, useContext } from 'react'
import { cartContext } from '../../../Contexts/cartContext'
import { priceContext } from '../../../Contexts/priceContext';
import { Link } from 'react-router-dom';


function FullStackCart() {

    const augEnd = '07.01.2024';
    const novEnd = '18.04.2024';
    const febEnd = '04.07.2024';
    const [end, setEnd] = useState(augEnd);
    const { cart, setCart } = useContext(cartContext);
    const { price, setPrice } = useContext(priceContext);


    function handleSelect(e) {
        if (e.target.value === 'august') { setEnd(augEnd) }
        if (e.target.value === 'november') { setEnd(novEnd) }
        if (e.target.value === 'februar') { setEnd(febEnd) }
    }

    function removeHandler() {
        setCart(cart.filter((value) => value != 'FullStack'))
    }

    function handlePrice() {
        setPrice('38,000₪')
        window.scrollTo(0, 0)
    }

    return (
        <div id='fullstack-first-container'>
            <div id='fullstack-second-container'>
                <div id='fullstack-cart-container'>
                    <div id='background-container'>
                        <div id='fullstack-cart'>
                            <img id='fullstack-cart-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYElEQVR4nO2cTWhdRRTH/zXUSl25F/ykG1ErUezCRZt2KRSEtrZQqQu1iOjSjViTUilUkIou3ASX0g83XZXsbJqKQVpdWE0Xrop975z3Erc18peZdwma8O67786985HMgf/mJS+Z+d25M2fOnDlAtmzZstU3/omHKZhkF0cpmKbgGwouUjBHwY1Cc8Vn5mfTxe9Omu9iqxmJB6k4QMGnBZy/qWAtme8KFig4Q8F+87exWY1mxAjOU9GpDWw00D4VX7OPV0hsQ+pGYoKCYxT80hq04TB/ZhevmzYgNSPxABUnqLjjHdxGLVHxRjIjkh3stvNSeHDrtUjBS4jV+AceouBzClYjgDXstTYL1mdcwg7EZFzG4xT8EBxQdf3EDp5GDEbFaxT8FQGUcUfjCgUHw8ITvEvBP8Fh1Ie4SsHJUPA+DA6gOZ31De+TCDrNhvWxL3gnI+gsW9L7PhaMdOc8rTQntrOwmGU/ydVWx4a4wnt4sll4S9hhfafQnVNvWmzU2bY7jPCdomedawZeH885xew0UZk+d7DbPaoSZ2CAniDOO0VxqHgzeCc0OMTjdUffRBFL4xbXnVpBWRtJDt94RqEejtQB6CMMf8WeYbjpSuvtFNwaD55ij5cnK5ga+8lufNBTntpaPZpNxVcZINYD/KL6ua1AfQPk4EhgsoZ8BTe6JLZXGX0HPDWI/wPYxS5v/7d+e/eNBmgyBjJADgE4UwWgv8MhSW4EzldJ9PG375XkAN7nXewsG32Tnhs0lRRAo7IAg/fdhyQIsGxXYnPvMkDWPnyyCYwZIEe8NbNlAL/LADEK4KUygFeDAVQ8WqTyjqNfvc+BgqtlAP1Gn8UtmMAu3goAcCEDVCeA1+N8hYkJruCRsaT4ILZX+HIwgN1E/EDBxTKA2Y1RNzcmO9Lq5kjnrZy6beVyMEFdggk5nEWncFYxCm/kVRjDAF4rhVcAPJMBYhjA6SoA92eAGAZw72iAxHYKJDvSqHesaSEqvswAsX70na8ErwD4cgaI9QBfrAzQQjT3bX0mFwm+Db7PHa6bY8GzAE1dgvANZxTq4VDdBMvfgzdeg+u2SXUeG6CFaG56h+8Ag0pwrBa8YhRuMxHYLQzvmnOpAPbx7Ba+5vC8E7w1iOaafOgOacJXYIvdib8ggwbXj40X8WEHT9mLeOE7x1YlWOYynmgU3hpEwcGoq3KoM7xVdvFqK/D+A/Ht4B3V1vReq/DWICpORdBZNqyPvMBbg5iLTrgbTX2slH3EwRX/dxpA4bywrCQIb7n1BaOqsY/HEvMTF41bhpiMg7oK56J+pc2xpOJs1JUuOSgRMB8c1kZ9b/b1SME4iOIcp+K3CMDdtikrqRRg3FBzoYcj5r5tAHA32cPh2sHQ2Iw9PGPnH8W9Fue4zVWEtiSys4+C0zZY61YG+b6dbwUz5tC78rntZjLexU528YKtuGu2iIJZCi4UWfgLheaKz2ZNfp6dFsx3RiX6ZMuWLRtK7V9WsNlD4oZ0FgAAAABJRU5ErkJggg==" alt="" />
                            <div id='fullstack-header'>Full-Stack Development</div>
                            <div id='fullstack-content'>הכשרת מתכנתים להוביל בתחום פיתוח אפליקציות רשת</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='fullstack-cart-content-container'>
                <div>Full-Stack Development :קורס</div>
                <div>
                    <select name="" id="" onChange={handleSelect}>
                        <option value="august">13.08.2023</option>
                        <option value="november">09.11.2023</option>
                        <option value="februar">18.02.2024</option>
                    </select>
                    <span> :תאריך התחלה</span>
                </div>
                <div>{end} :תאריך סיום</div>
                <div>עלות: 38,000 ש"ח</div>
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

export default FullStackCart