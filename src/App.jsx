import PersonInfo from "./components/PersonInfo"
import About from "./components/About"
import Interests from "./components/Interests"
import ContactFooter from "./components/ContactFooter"

export default function App() {
    return (
        <div className="card-container">
            <PersonInfo />
            <div className="description-items">
                <About />
                <Interests />
            </div>
            <ContactFooter />
        </div>
    )
}