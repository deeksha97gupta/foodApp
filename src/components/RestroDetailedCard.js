import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import ItemList from "./ItemLIst";
import { useState } from "react";

const RestroDetailedCard = () => {
    const [openItem, setOpenItem] = useState(null);
    const { resId } = useParams();
    const {detailedList, categories } = useRestaurantDetails(resId) || {};

    console.log('categories', categories);

    if (detailedList.length === 0) {
       return <Shimmer />
    }
    const { name, cuisines, avgRatingString, totalRatingsString } = detailedList || [];
    const cuisinesStr = (cuisines || []).join(", ");
    return (
        <div className="flex flex-col flex-wrap content-center m-3">
            <h1 className="text-center text-4xl font-bold text-gray-800">{name}</h1>
            <h2 className="text-xl font-bold text-gray-800">
                {avgRatingString} Stars - {totalRatingsString}
            </h2>
            <h3>Cuisines - {cuisinesStr}</h3>
            <div>
                {(categories || []).map((data, index) => 
                    <ItemList key={data.categoryId}
                    item={data}
                    showDetails={index === openItem ? true : false}
                    setOpenItem={() => setOpenItem(index)}/>
                )}
            </div>
        </div>
    )
}

export default RestroDetailedCard;