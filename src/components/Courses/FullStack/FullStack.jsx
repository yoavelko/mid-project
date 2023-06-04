import '../Courses.css'
import { cartContext } from '../../../Contexts/cartContext';
import { cartStyle } from '../../../Contexts/cartStyle';
import { useContext , useState } from 'react';

function FullStack() {

    const { cart, setCart } = useContext(cartContext);
    const { setStyle } = useContext(cartStyle);
    const [text , setText] = useState('הוסף לסל');

    function salHandler() {
        if (text === 'הוסף לסל') {
            setStyle('notification');
            setText('הסר מהסל');
            setCart([...cart, 'FullStack']);
        } else {
            setStyle('notification-two');
            setText('הוסף לסל');
            setCart(cart.filter((value) => value != 'FullStack'));
        }
    }

    return (
        <div id='general-container'>
            <div className='fullstack-course-container'>
                <div id='fullstack-course'>
                    <div id='cyber-red-header-container'>
                        <div className='courses-header'>
                            קורס הכשרת
                            <div id='breaker'></div>
                            <span id='fullstack-logo-container'>
                                <img id='fullstack-logo' className='imgs' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYElEQVR4nO2cTWhdRRTH/zXUSl25F/ykG1ErUezCRZt2KRSEtrZQqQu1iOjSjViTUilUkIou3ASX0g83XZXsbJqKQVpdWE0Xrop975z3Erc18peZdwma8O67786985HMgf/mJS+Z+d25M2fOnDlAtmzZstU3/omHKZhkF0cpmKbgGwouUjBHwY1Cc8Vn5mfTxe9Omu9iqxmJB6k4QMGnBZy/qWAtme8KFig4Q8F+87exWY1mxAjOU9GpDWw00D4VX7OPV0hsQ+pGYoKCYxT80hq04TB/ZhevmzYgNSPxABUnqLjjHdxGLVHxRjIjkh3stvNSeHDrtUjBS4jV+AceouBzClYjgDXstTYL1mdcwg7EZFzG4xT8EBxQdf3EDp5GDEbFaxT8FQGUcUfjCgUHw8ITvEvBP8Fh1Ie4SsHJUPA+DA6gOZ31De+TCDrNhvWxL3gnI+gsW9L7PhaMdOc8rTQntrOwmGU/ydVWx4a4wnt4sll4S9hhfafQnVNvWmzU2bY7jPCdomedawZeH885xew0UZk+d7DbPaoSZ2CAniDOO0VxqHgzeCc0OMTjdUffRBFL4xbXnVpBWRtJDt94RqEejtQB6CMMf8WeYbjpSuvtFNwaD55ij5cnK5ga+8lufNBTntpaPZpNxVcZINYD/KL6ua1AfQPk4EhgsoZ8BTe6JLZXGX0HPDWI/wPYxS5v/7d+e/eNBmgyBjJADgE4UwWgv8MhSW4EzldJ9PG375XkAN7nXewsG32Tnhs0lRRAo7IAg/fdhyQIsGxXYnPvMkDWPnyyCYwZIEe8NbNlAL/LADEK4KUygFeDAVQ8WqTyjqNfvc+BgqtlAP1Gn8UtmMAu3goAcCEDVCeA1+N8hYkJruCRsaT4ILZX+HIwgN1E/EDBxTKA2Y1RNzcmO9Lq5kjnrZy6beVyMEFdggk5nEWncFYxCm/kVRjDAF4rhVcAPJMBYhjA6SoA92eAGAZw72iAxHYKJDvSqHesaSEqvswAsX70na8ErwD4cgaI9QBfrAzQQjT3bX0mFwm+Db7PHa6bY8GzAE1dgvANZxTq4VDdBMvfgzdeg+u2SXUeG6CFaG56h+8Ag0pwrBa8YhRuMxHYLQzvmnOpAPbx7Ba+5vC8E7w1iOaafOgOacJXYIvdib8ggwbXj40X8WEHT9mLeOE7x1YlWOYynmgU3hpEwcGoq3KoM7xVdvFqK/D+A/Ht4B3V1vReq/DWICpORdBZNqyPvMBbg5iLTrgbTX2slH3EwRX/dxpA4bywrCQIb7n1BaOqsY/HEvMTF41bhpiMg7oK56J+pc2xpOJs1JUuOSgRMB8c1kZ9b/b1SME4iOIcp+K3CMDdtikrqRRg3FBzoYcj5r5tAHA32cPh2sHQ2Iw9PGPnH8W9Fue4zVWEtiSys4+C0zZY61YG+b6dbwUz5tC78rntZjLexU528YKtuGu2iIJZCi4UWfgLheaKz2ZNfp6dFsx3RiX6ZMuWLRtK7V9WsNlD4oZ0FgAAAABJRU5ErkJggg==" alt="" />
                            </span>ULL-STACK DEVELOPMENT
                        </div>
                        <div className='courses-time'>משך הקורס: 248 שעות</div>
                    </div>
                </div>
            </div>
            <div id='red-course-content'>
                <div className='content-headers'><span></span>Full-Stack Development -<span> תיאור ומטרת קורס</span></div>
                <div className='content-content'>קורס הכשרת מגן סייבר
                    'בלו טים דפנדר'
                    מכין את בוגריו להתמודד בהצלחה עם האיומים העדכניים ביותר שיש למערכות המידע הארגוניות כיום. הידע הנלמד בקורס מגן סייבר יסייע לך לנטר ולנתח תקשורת נתונים חשודה, לחקור נזקי פוגענים ועוד</div>
                <br />
                <div className='content-content'>בהכשרה הייחודית של סייברפרו הושם דגש על עבודה מעשית רבה שתבוצע במעבדות תרגול ובאמצעות טכנולוגיות למידה מהמתקדמות בעולם</div>
                <br />
                <div className='content-content'>בסיום הקורס תוכלו להגן ולאבטח מערכות מידע, לצוד אירועי חדירה ולזהות התקפות שמתרגשות לבוא. הקורס יכשיר אתכם לתעשיית הסייבר לתפקידים כגון: Incident Responder, מפעיל SOC, אנליסט סייבר וחוקר סייבר</div>
                <br /><br /><br />
                <div className='content-headers'>קהל היעד</div>
                <div className='content-content'>
                    (צוותים כחולים הנדרשים להוכחת ישימות של תקיפות ופגיעויות)
                    צוותים אדומים, חוקרי פגיעויות וצוותים סגולים
                    ,(Penetration Testers)
                    בודקי חדירות תשתיתיים ו/או אפליקטיביים
                </div>
                <div className='content-content'>
                    .Cyber Essentials
                    ובוגרי מסלול
                </div>
                <br /><br /><br />
                <div className='content-headers'>דרישות קדם</div>
                <div className='content-content'>
                    Domain
                    ושירותי
                    Windows
                    היכרות טובה מאוד עם מערכות הפעלה מבוססות -
                </div>
                <div className='content-content'>
                    Linux/Unix
                    היכרות טובה מאוד עם מערכות הפעלה מבוססות -
                </div>
                <div className='content-content'>
                    TCP/IP
                    היכרות טובה מאוד עם פרוטוקולי תקשורת -
                </div>
                <div className='content-content'>
                    ניסיון קודם בכתיבת קוד -
                </div>
                <div className='content-content'>
                    .http, HTML, css, javascript, SQL, PHP, node.js
                    :היכרות קודמת עם טכנולוגיות אינטרנט -
                </div>
                <div className='content-content'>
                    יתרון -
                    Linux internals
                    ו/או
                    Windows internals
                    היכרות עם -
                </div>
                <div className='content-content'>
                    יתרון -
                    x86 ASM
                    ו/או
                    C
                    ניסיון קודם בפיתוח בשפת -
                </div>
                <br /><br /><br />
                <div className='flexer'>
                    <div id='time container'>
                        <div className='content-headers'>משך הקורס</div>
                        <div className='content-content'>לימוד פרונטלי ומעבדה: 248 שעות</div>
                        <div className='content-content'>תרגול עצמי: 320 שעות</div>
                    </div>
                    <br /><br /><br />
                    <div id='qualifications-flexer'>
                        <div className='content-headers'>:הסמכות</div>
                        <div id='qulifications-container'>
                            <div id='qulifications-container-inner'>
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/11/Blue-web-1.svg" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/11/GIAC-Certification.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id='button-container'>
                        <a href="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/Syllabus-BT-CPI-HEB-V2.0-WEB.pdf" target="_blank" rel="noopener noreferrer">
                            <button className='schedule-button'>סילבוס הקורס</button>
                        </a>
                        <button className='schedule-button' onClick={salHandler}>{text}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FullStack