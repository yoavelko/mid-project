import './RedCart.css'
import { useState } from 'react'

function RedCart() {

    const octEnd = '19.02.2024'
    const decEnd = '07.04.2024'
    const marchEnd = '28.07.2024'
    const [end, setEnd] = useState(octEnd)


    function handleSelect(e) {
        if (e.target.value === 'october') { setEnd(octEnd) }
        if (e.target.value === 'december') { setEnd(decEnd) }
        if (e.target.value === 'march') { setEnd(marchEnd) }
    }

    return (
        <div id='red-first-container'>
            <div id='red-second-container'>
                <div id='red-cart-container'>
                    <div id='red-front'>
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
                <div>
                    <button>לתשלום</button>
                </div>
            </div>
        </div>
    )
}

export default RedCart