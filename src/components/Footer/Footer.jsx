import './Footer.css'

function Footer() {

    return (
        <div id='footer-container'>
            <div id='recommendation-container'>
                <div className='footer-headers' id='recommendation-header'>המומלצים שלנו</div>
                <div className='footer-content'>Blue Team Defender</div>
                <div className='footer-content'>Red Team Expert</div>
                <div className='footer-content'>Cyber Essentials</div>
                <div className='footer-content'> (CISO) קורס ניהול אבטת מידע</div>
            </div>
            <div id='wrokshop-container'>
                <div className='footer-headers' id='workshop-header'>סדנאות קצרות</div>
                <div className='footer-content'>Introduction to Cyber Warfare</div>
                <div className='footer-content'>Anatomy of an Attack</div>
                <div className='footer-content'>Web Application Hacking</div>
                <div className='footer-content'>Windows Malware Forensics</div>
                <div className='footer-content'>Linux Forensics</div>
                <div className='footer-content'>Introduction to ASM x86 & Reverse Engineering</div>
                <div className='footer-content'>CISSP Bootcamp</div>
            </div>
            <div id='privacy-container'>
                <div className='footer-headers' id='privacy-header'>פרטיות</div>
                <div className='footer-content'>הצהרת פרטיות</div>
                <div className='footer-content'>תנאי שימוש</div>
            </div>
            <div id='contact-container'>
                <div className='footer-headers' id='contact-header'>צור קשר</div>
                <div className='footer-content'>:שעות פעילות</div>
                <div className='footer-content'>ימים א'-ה' 09:00-19:00</div>
                <div className='footer-content'>יום שישי 09:00-13:00</div>
                <div className='footer-content'>טלפון: 058-7782341</div>
                <div className='footer-content'>info@cyberpro-israel.co.il</div>
            </div>
            <div id='info-container'>
                <div className='footer-headers' id='info-header'>מידע</div>
                <div className='footer-content'>אודות סייברפרו</div>
                <div className='footer-content'>קריירה</div>
                <div className='footer-content'>קורסים</div>
                <div className='footer-content'>Cyberpro Global</div>
            </div>
        </div>
    )
}

export default Footer