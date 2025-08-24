import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import { restroData } from "../utils/mockData";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyContainer = () => {
    const [newRestroList, setNewRestroList] = useState([]);
    const [filteredRestroList, setFilteredRestroList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const dynamicData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setNewRestroList(dynamicData);
        setFilteredRestroList(dynamicData);
    }
    if (!onlineStatus) {
       return (
            <div>
                <h1>Look like you are offline</h1>
            </div>
       )
    }

    if (newRestroList.length === 0) {
       return <Shimmer />
    }
    return (
        <div>
            <div>
                <input 
                    type="text"
                    className="m-2 border shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
                    value={searchValue}
                    onChange={(evt) => setSearchValue(evt.target.value)}
                />
                <button
                    className="p-2 m-2 bg-pink-100 cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
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
                    className="p-2 m-2 bg-pink-100 cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
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
            <div className="flex flex-wrap">
                {filteredRestroList.map(data => 
                    <Link to={"/restro/"+data.info.id} key={data.info.id}>
                        <RestroCard restroInfo={data} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default BodyContainer