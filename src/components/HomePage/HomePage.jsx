import './HomePage.css'

function HomePage() {

    return (
        <div id='homepage-container'>

            <div id='ad-container'>
                <div id='ad-header'>
                    ...עידן חדש נפתח
                    <br />
                    WebApp
                    לימוד מקצועות הסייבר ופיתוח
                    <br />
                    !בסביבה טכנולוגית מהמתקדמות בעולם
                </div>
                <div id='ad-content'>
                    .ההכשרה היחדה שתבטיח לך קריירה מומצלחת בתעשיית ההייטק העתידית
                </div>
                <button className='buttons' id='sign-button'>הירשמו עכשיו</button>
            </div>

            <div id='cyber-ad-header'>המומלצים ביותר</div>
            <div id='cyber-ad'>
                <div id='cyber-ad-container'>
                    <div className='cyber-ads' id='red-container'>
                        <div id='red-container-inner'>
                            <div id='red-front'>
                                <div id='red-header'>Red Team Expert</div>
                                <div id='red-content'>הכשרת אנשי צוות אדום לבדיקות חדירה בתשתיות ובמערכות מידע</div>
                            </div>
                            <div id='red-back'>
                                <span><span>Red Team</span> קורס הכשרת מגן סייבר</span>
                                <span>מכין את בוגריו לפעול באופן פרואקטיבי על מנת לגלות פרצות אבטחה, לחסן את הארגון מפני התקפות מבחוץ ומבפנים ולסגור כל נקודת חולשה אפשרית</span>
                                <br />
                                <a href="">
                                    <span id='read-more'>קרא עוד</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='cyber-ads' id='blue-container'>
                        <div id='blue-container-inner'>
                            <div id='blue-front'>
                                <div>Blue Team Defender</div>
                                <div>הכשרת אנשי צוות כחול להתמודדות עם אירועי סייבר ותחקורים</div>
                            </div>
                            <div id='blue-back'>
                                <div>
                                    <span><span>Blue Team Defender</span> קורס הכשרת</span>
                                    <br />
                                    <span>מכין את בוגריו  להתמודד בהצלחה עם האיומים העדכניים ביותר שיש למערכות המידע הארגוניות כיום. הידע הנלמד בקורס מגן סייבר יסייע לך לנטר ולנתח תקשורת נתונים חשודה, לחקור נזקי פוגענים ועוד</span>
                                    <br />
                                    <a href="">
                                        <span id='read-more'>קרא עוד</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='cyber-ads' id='essentials-container'>
                        <div id='essentials-container-inner'>
                            <div id='essentials-front'>
                                <div>Cyber Essentials</div>
                                <div>הכשרה לטכנולוגיות הליבה של עולם הסייבר</div>
                            </div>
                            <div id='essentials-back'>
                                <div>המסלול הזה הינו קרוס טכנולוגי ומעשי לעולמות הידע שהן הליבה של טכנולוגיות המידע – והצעד הראשון לקריירה בסייבר</div>
                                <br />
                                <a href="">
                                    <span id='read-more'>קרא עוד</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='fullstack-flex'>
                <div id='fullstack-img-container'>
                    <img id='fullstack-img' src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div id='fullstack-container'>
                    <div id='fullstack-header'>!חדש בסייברפו ישראל</div>
                    <div id='fullstack-second-header'>Full-stack קורס</div>
                    <div id='fullstack-content'>למה לעבוד קשה כשאפשר לעבוד נכון? עולם התכנות של ימינו עשוי להיות מבלבל עם מגוון רחב של שפות תכנות שניתן להתמחות בהן. לכן כדי להתמחות בפיתוח צריך לדעת מה נכון ללמוד אבל גם לא פחות חשוב: לדעת על מה אפשר לוותר בשלב הנוכחי. מדובר בהחלטה דרמטית שתשפיע בסופו של דבר על הביקוש שלכם בשוק העבודה.</div>
                </div>
            </div>

        </div>
    )
}

export default HomePage