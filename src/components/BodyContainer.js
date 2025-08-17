import RestroCard from "./RestroCard";
import { restroData } from "../utils/mockData";

const BodyContainer = () => {
    return (
        <div>
            <div>Search</div>
            <div className="restro-data">
                {restroData.map(data => <RestroCard key={data.info.id} restroInfo={data} />)}
            </div>
        </div>
    )
}

export default BodyContainer