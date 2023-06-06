import React from "react";
import './About.css'

const About = () => {
    return (
        <div className="about-container">  
            <div className= "logo-holder">   
            <img src="https://cyberpro-israel.co.il/wp-content/uploads/2021/01/CYBERPRO-Israel-Logo-Black.svg" alt="" />
            </div>
            <div className="headline">  
                <h1> עליונות טכנולוגית ומצוינות בהכשרות עובדי סייבר  ואבטחת המידע בישראל </h1>
                <br />
                <br />
            </div>
            <div className="img-holder">  
                <span><img src="https://cyberpro-israel.co.il/wp-content/uploads/2019/08/triangle_216.svg" alt="" /></span>
                <div className="text-container" >   
                  <p>
                  <br /> .CYBERPRO Global הינה השלוחה הישראלית של CYBERPRO Israel <br /> 
                  אשר הוקמה על מנת לתת מענה לצורך הולך וגדל באנשי מקצוע בשוק הישראלי <br />
                  והרחבת שיתוף הפעולה עם חברות טכנולוגיות ישראליות המפתחות כלי סייבר מתקדמים.
                   </p>
                   <br />
                   <p>
                     .בתחומי תשתיות פאבטחת מידע וסייבר הינן שם דבר בעולם   CYBERPRO ההכשרות המתקדמות והמבוקשות של <br />
                     .הכשרות אלו פותחו על ידי מומחי סייבר מהשורה הראשונה בעולם, עבור גופיי אבטחה בינלאומיים השמים דגש רב על יכולות ההדרכה הגבוהות <br />
                     .שיטות הלמידה המקצועיות וטכנולוגיות האימון והתרגול הייחודיות החיבור עם גופים בינלאומיים מאפשרים לסטודנטים הלומדים אצלנו להחשף להזדמנויות תעסוקה ייחודיות בארץ ובעולם <br />
                   </p>
                </div>
            </div>
              <div className="explain">
                    <h1 className="explain-headline">  מגוון מסלולי הכשרה, קורסים וסדנאות לאנשי סייבר <br />
                    ולמבקשים להיכנס לעולם זה </h1> 
                    <h3 className="explain-headline"> מסלולי הלימוד, הקורסים והסדנאות שלנו מבוססים על תרגול מעשי רב וכוללים מגוון רחב <br />
                    של מעבדות המשלבות ידע וטכנולוגיות מתקדמות, כגון שימוש בסימולטור הסייבר המתקדם שלנו <br />
                    .על מנת לתרגל התמודדות עם מצבי אמת </h3>
                    <div className="explain-content">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRRdUCqkCjSJSCjJ-j-sCrhsMxW7-oRle2Z52jg8BKd2N7dhNt" alt="" />
                        <p>
                             <h2>איומי סייבר</h2>  
                             בעולם בו האיומים מתחדשים ללא הרף, נוצרים פערי אבטחה המנוצלים לרעה ע"י גורמים שונים <br />
                             הניסיון רב השנים שלנו מוכיח, שהטכנולוגיה לבדה לא מספיקה כדי להגן מפני תקיפות והסתמכות מוחלטת על הטכנולוגיה במלחמה זו תביא להגדלת פערי האבטחה וההשלכות הנובעות מכך <br />
                             על כן שמנו לעצמנו מטרה להשקיע ב"הון האנושי" באמצעות הכשרת בוגרים בעלי יכולת חשיבה "מחוץ לקופסא" עם ניסיון פרקטי בלתי מבוטל המתבסס על יכולות ייחודיות, חדשנות ועדכוני זמן אמת שלנו מחזית הסייבר העולמית
                             </p>
                    </div>

                </div>
                <div className="team-headline"><h1>הצוות שלנו</h1></div>
                <div className="team">
                    <div className="team-container">  
                      <div className="teachers" id="teachers-container">
                        <div className= "teachers-container-inner">
                            <div className="teachers-front">
                                <div className="teachers-header"><h1>סגל המורים</h1></div>
                                <div className="teachers-content">  שחבריה עוברים תהליך מיון וסינון מקיף ותובעני, הינם חוד החנית של עולם הדרכת הסייבר ,CYBERPRO Israel סגל המרצים שלנו נבחר בקפידה והינו מורכב ממקצועניים בתחום אבטחת המידע והסייבר, בוגרי יחידות עילית בצבא וארגונים שונים בארץ ובעולם. הנבחרת המצומצמת של</div>
                            </div>
                            <div className="teachers-back">
                            <h1>ערן גולדשטיין</h1>
                            <img className="flipcard-img" src="https://cyberpro-israel.co.il/wp-content/uploads/2020/08/Eran.jpg" alt="" />
                            </div>
                        </div>
                      </div>
                      <div className="experts" id="experts-container">
                        <div className="experts-container-inner">
                            <div className="experts-front">
                                <div className="experts-header"><h1>המומחים שלנו</h1></div>
                                <div className="experts-content">המומחים שלנו מתמודדים עם התקפות סייבר על בסיס יומי, עדים ממקור ראשון לנזקים ולהשלכות של התקפות אלו. זה התמריץ הגדול ביותר שלנו למלא את ייעודנו בהגנה על לקוחותינו והנחלת הידע לבוגרינו. כחלק מתפיסה זו אנו רואים עצמנו כבית עבור אנשי הסייבר בישראל, מליווי בצעדי הכניסה לתחום ועד קורסים מתקדמים וסדנאות ממוקדות לשמירת הכשירות ושיפור היכולות של צוותי הסייבר ואבטחת המידע</div>
                            </div>
                            <div className="experts-back">
                                <h1>תום שוורץ</h1>
                                <img className="flipcard-img" src="https://cyberpro-israel.co.il/wp-content/uploads/2020/05/Tom.jpg" alt="" />
                            </div>
                        </div>
                      </div>
                    </div>
              </div>
        </div>
    )
    }

export default About