import TwitterIcon from "../assets/twitter_icon.png"
import FacebookIcon from "../assets/facebook_icon.png"
import InstagramIcon from "../assets/instagram_icon.png"
import GithubIcon from "../assets/github_icon.png"

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