import '../Courses.css'
import { cartContext } from '../../../Contexts/cartContext';
import { cartStyle } from '../../../Contexts/cartStyle';
import { useContext , useState } from 'react';


function Essentials() {

    const { cart, setCart } = useContext(cartContext);
    const { setStyle } = useContext(cartStyle);
    const [text , setText] = useState('הוסף לסל');

    function salHandler() {
        if (text === 'הוסף לסל') {
            setStyle('notification');
            setText('הסר מהסל');
            setCart([...cart, 'Essentials']);
        } else {
            setStyle('notification-two');
            setText('הוסף לסל');
            setCart(cart.filter((value) => value != 'Essentials'));
        }
    }

    return (
        <div id='general-container'>
            <div className='essentials-course-container'>
                <div id='essentials-course'>
                    <div id='cyber-red-header-container'>
                        <div className='courses-header'>
                            קורס הכשרת <br />
                            <img style={{marginRight: '5px'}} className='imgs' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/12/program_e_slider_icon_course_v0.1.svg" alt="" />SSENTIALS CYBER
                        </div>
                        <div className='courses-time'>משך הקורס: 248 שעות</div>
                    </div>
                </div>
            </div>
            <div id='red-course-content'>
                <div className='content-headers'><span></span>Cyber Essentials -<span> תיאור ומטרת קורס</span></div>
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
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/11/Essentials-web.svg" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/CISCO-Cyber-OPS-Certification-1-200x200.png" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/CCSA-Checkpoint-Certification-200x200.png" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/CompTIA-Certification-200x200.png" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/mta-Certification-200x200.png" alt="" />
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

export default Essentials