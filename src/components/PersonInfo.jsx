import ProfileImg from "../assets/elias_ferreira_cover.jpg"
import MailIcon from "../assets/mail_icon.png"
import LinkedinIcon from "../assets/linkedin_icon.png"

export default function PersonInfo() {
    return(
        <div className="info-container">
            <img className="profile-img" src={ProfileImg} />
            <h1 className="person-name">Elías Ferreira</h1>
            <h2 className="person-position">Frontend Developer</h2>
            <h3 className="person-website">eliosferre-curriculum.com</h3>
            <div className="btn-container">
                <div className="site-btn email-btn">
                    <img className="site-img" src={MailIcon}/>
                    <p>Email</p>
                </div>
                <div className="site-btn linkedin-btn">
                    <img className="site-img" src={LinkedinIcon}/>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}