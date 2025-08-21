import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestroDetailedCard = () => {
    const { resId } = useParams();
    const detailedList = useRestaurantDetails(resId);

    if (detailedList.length === 0) {
       return <Shimmer />
    }
    const { name, cuisines, avgRatingString, totalRatingsString } = detailedList || [];
    return (
        <div>
            <h1>{name}</h1>
            <h2>{avgRatingString} Stars - {totalRatingsString}</h2>
            <h3>Cuisines</h3>
            <ul>{(cuisines || []).map((ele, idx) => <li key={idx}>{ele}</li>)}</ul>
        </div>
    )
}

export default RestroDetailedCard;