import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { restroData } from "../utils/mockData";
import Shimmer from "./Shimmer"

const BodyContainer = () => {
    const [newRestroList, setNewRestroList] = useState([]);
     const [filteredRestroList, setFilteredRestroList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const dynamicData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setNewRestroList(dynamicData);
        setFilteredRestroList(dynamicData);
    }
    if (newRestroList.length === 0) {
       return <Shimmer />
    }
    return (
        <div>
            <div>
                <input 
                    type="text"
                    className="input-text"
                    value={searchValue}
                    onChange={(evt) => setSearchValue(evt.target.value)}
                />
                <button
                    className="serach-btn"
                    onClick={() => {
                        const filteredList = newRestroList.filter((data) => {
                            const { info } = data || {};
                            const { name } = info || {};
                            return name.toLowerCase().includes(searchValue.toLowerCase());
                        });
                        setFilteredRestroList(filteredList);
                    }}
                >
                    Search
                </button>
                <button
                    className="top-btn"
                    onClick={() => {
                        const updatedList = newRestroList.filter(data => {
                            const { info } = data || {};
                            const { avgRating } = info || {};
                            return avgRating > 4.1;
                        });
                        setFilteredRestroList(updatedList);
                    }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restro-data">
                {filteredRestroList.map(data => <RestroCard key={data.info.id} restroInfo={data} />)}
            </div>
        </div>
    )
}

export default BodyContainer