import TwitterIcon from "../assets/TwitterIcon.png"
import FacebookIcon from "../assets/FacebookIcon.png"
import InstagramIcon from "../assets/InstagramIcon.png"
import GithubIcon from "../assets/GithubIcon.png"

export default function ContactFooter() {
    return (
        <footer>
            <img src={TwitterIcon} />
            <img src={FacebookIcon} />
            <img src={InstagramIcon} />
            <img src={GithubIcon} />
        </footer>
    )
}