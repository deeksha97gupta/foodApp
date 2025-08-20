import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestroDetailedCard = () => {
    const [detailedList, setDetailedList] = useState([]);
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.918938&lng=75.7887458&restaurantId="+resId
        );

        const json = await data.json();
        const detailedRestaurantData = json?.data?.cards[2]?.card?.card?.info;
        setDetailedList(detailedRestaurantData);
    }

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