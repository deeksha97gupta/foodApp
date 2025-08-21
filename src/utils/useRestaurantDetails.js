import { useEffect, useState } from "react";

const useRestaurantDetails = (resId) => {
    const [detailedList, setDetailedList] = useState([]);
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

    return detailedList
}

export default useRestaurantDetails;
