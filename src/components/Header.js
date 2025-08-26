import { logoURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { loginUser } = useContext(UserContext);
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <div className="flex justify-between bg-pink-50 shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
            <img className="w-30" src={logoURL} />
            <div className="flex flex-wrap content-center">
                <h3 className="px-2.5">
                    Online Status {onlineStatus ? "🟢" : "🔴" }
                </h3>
                <h3 className="px-2.5">
                    <Link to="/">Home</Link>
                </h3>
                <h3 className="px-2.5">
                    <Link to="/grocery">Grocery</Link>
                </h3>
                <h3 className="px-2.5">
                    <Link to="/about">About Us</Link>
                </h3>
                <h3 className="px-2.5">
                    <Link to="/contact">Contact Us</Link>
                </h3>
                <h3 className="px-2.5">
                    <Link to="/cart">Cart({cartItems.length})</Link>
                </h3>
                <h3 className="px-2.5">{loginUser}</h3>
            </div>
        </div>
    )
}

export default Header;