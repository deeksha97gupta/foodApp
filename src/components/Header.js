import { logoURL } from "../utils/constants"

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logoURL} />
            <div className="nav-link">
                <h3 className="nav-data">Home</h3>
                <h3 className="nav-data">About Us</h3>
                <h3 className="nav-data">Contact Us</h3>
                <h3 className="nav-data">Cart</h3>
            </div>
        </div>
    )
}

export default Header;