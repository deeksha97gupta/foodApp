import { useEffect, useState } from "react";
import { cdnURL } from "./constants"; 

const useRestaurantDetails = (resId) => {
    const [detailedList, setDetailedList] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(cdnURL+resId);

        const json = await data.json();
        const detailedRestaurantData = json?.data?.cards[2]?.card?.card?.info;
        const categoriesData = (json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []).filter(
            (data) => {
                const type = data?.card?.card?.['@type'];
                return type === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
            }
        ).map(data => data?.card?.card);
        setDetailedList(detailedRestaurantData);
        setCategories(categoriesData);
    }

    return { detailedList, categories }
}

export default useRestaurantDetails;
