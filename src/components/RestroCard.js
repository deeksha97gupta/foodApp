import { cardImgURl } from "../utils/constants"

const RestroCard = ({ restroInfo }) => {
    const { info } = restroInfo || {};
    const { name, cloudinaryImageId, avgRating } = info || {};
    return (
        <div className="p-3 m-3 w-50 h-60 bg-gray-100">
            <img className="w-50 h-40" src={`${cardImgURl}${cloudinaryImageId}`} />
            <hr />
            <div className="card-body">
                <p>{name}</p>
                <p>{avgRating} Stars</p>
            </div>
        </div>
    )
}

export default RestroCard;