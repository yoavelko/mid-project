import '../Courses.css'
import { cartContext } from '../../../Contexts/cartContext';
import { cartStyle } from '../../../Contexts/cartStyle';
import { useContext , useState } from 'react';


function RedTeam() {

    const { cart, setCart } = useContext(cartContext);
    const { setStyle } = useContext(cartStyle);
    const [text , setText] = useState('הוסף לסל');

    function salHandler() {
        if (text === 'הוסף לסל') {
            setStyle('notification');
            setText('הסר מהסל');
            setCart([...cart, 'RedTeam']);
        } else {
            setStyle('personal-area');
            setText('הוסף לסל');
        }
    }

    return (
        <div id='general-container'>
            <div className='red-course-container'>
                <div id='red-course'>
                    <div id='cyber-red-header-container'>
                        <div className='courses-header'>
                            קורס הכשרת <br />
                            <img className='imgs' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/12/program_r_slider_icon_course_v0.1.svg" alt="" />ED TEAM EXPERT
                        </div>
                        <div className='courses-time'>משך הקורס: 248 שעות</div>
                    </div>
                </div>
            </div>
            <div id='red-course-content'>
                <div className='content-headers'><span></span>Red Team Expert -<span> תיאור ומטרת קורס</span></div>
                <div className='content-content'>
                    קורס הכשרת מגן סייבר
                    'רד טים אקספרט'
                    מכין את בוגריו לפעול באופן פרואקטיבי על מנת לגלות פרצות אבטחה, לחסן את הארגון מפני התקפות מבחוץ ומבפנים ולסגור כל נקודת חולשה אפשרית</div>
                <br />
                <div className='content-content'>בהכשרה הייחודית של CYBERPRO הושם דגש על בניית סט יכולות טכניות גבוהות שיאפשרו להתמודד עם התוקף המתוחכם ביותר. את הידע הרב שתצברו נבחן באמצעות טכנולוגיות למידה מהמתקדמות בעולם, שיאמנו ויכינו אתכם לעבודה במקצוע ובסטנדרטים הגבוהים ביותר</div>
                <br />
                <div className='content-content'>בסיום הקורס תוכלו לתכנן, לבצע ולזהות פרצות אפשריות במערכות מידע ובמערכיי תקשורת, לזהות נקודות חולשה בארגון ולבנות אסטרטגיות הגנה שיחסנו את הארגון. הקורס יכשיר אתכם לתעשיית הסייבר לתפקידי מפתח בעולם הסייבר, כגון: בודקי חדירות, חברי צוותים אדומים וחוקרי פגיעויות</div>
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
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/11/Red-web.svg" alt="" />
                                <img className='qulifications' src="https://cyberpro-israel.co.il/wp-content/uploads/2019/11/OSCP-Certification-Logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id='button-container'>
                        <a href="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/Syllabus-RT-CPI-HEB-v2.0-WEB.pdf" target="_blank" rel="noopener noreferrer">
                            <button className='schedule-button'>סילבוס הקורס</button>
                        </a>
                        <button className='schedule-button' onClick={salHandler}>{text}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RedTeam