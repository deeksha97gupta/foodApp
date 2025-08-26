import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartReducer";

const ItemCard = ({ itemCard }) => {
    const dispatch = useDispatch();
    const { info } = itemCard?.card || {};
    const { id, name, description, imageId } = info || {};
    return (
        <div key={id} className="flex w-200 p-2 my-2 bg-gray-100">
        <div className="w-8/12">
            <div className="font-bold">{name}</div>
            <div>{description}</div>
        </div>
        <div className="w-4/12">
            <button 
            className="cursor-pointer absolute p-2 rounded-2xl bg-black text-white"
            onClick={() => dispatch(addItem(itemCard))}
            >
            +Add
            </button>
            <img 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId}
            />
        </div>
        </div>
    )
}

export default ItemCard;