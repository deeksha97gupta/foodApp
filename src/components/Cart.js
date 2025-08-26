import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartReducer";
import ItemCard from "./ItemCard";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    console.log(cartItems);
    return (
        <div>
            <div className="text-4xl flex my-5 justify-center font-bold">
                Cart
            </div>
            <div className="flex justify-center my-5">
                <button 
                    className=" bg-black text-white cursor-pointer p-2 rounded-2xl w-30"
                    onClick={() => dispatch(clearCart())}
                >
                        Clear cart
                </button>
            </div >
            <div className="grid justify-center">
                {(cartItems || []).map(item => (
                    <ItemCard key={item?.card?.info?.id} itemCard={item} />
                ))}
            </div>
        </div>
    )
};

export default Cart;