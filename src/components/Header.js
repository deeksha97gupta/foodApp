import { logoURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <img className="logo" src={logoURL} />
            <div className="nav-link">
                <h3 className="nav-data">
                    Online Status {onlineStatus ? "🟢" : "🔴" }
                </h3>
                <h3 className="nav-data">
                    <Link to="/">Home</Link>
                </h3>
                <h3 className="nav-data">
                    <Link to="/about">About Us</Link>
                </h3>
                <h3 className="nav-data">
                    <Link to="/contact">Contact Us</Link>
                </h3>
                <h3 className="nav-data">Cart</h3>
            </div>
        </div>
    )
}

export default Header;