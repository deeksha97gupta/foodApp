import { useState } from "react";
import RestroCard from "./RestroCard";
import { restroData } from "../utils/mockData";

const BodyContainer = () => {
    const [newRestroList, setNewRestroList] = useState(restroData);
    return (
        <div>
            <div>
                <button
                    className="top-btn"
                    onClick={() => {
                        const updatedList = newRestroList.filter(data => {
                            const { info } = data || {};
                            const { avgRating } = info || {};
                            return avgRating > 4.1;
                        });
                        setNewRestroList(updatedList);
                    }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restro-data">
                {newRestroList.map(data => <RestroCard key={data.info.id} restroInfo={data} />)}
            </div>
        </div>
    )
}

export default BodyContainer