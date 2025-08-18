import { cardImgURl } from "../utils/constants"

const RestroCard = ({ restroInfo }) => {
    const { info } = restroInfo || {};
    const { name, cloudinaryImageId, avgRating } = info || {};
    return (
        <div className="restro-card">
            <img className="card-img" src={`${cardImgURl}${cloudinaryImageId}`} />
            <hr />
            <div className="card-body">
                <p>{name}</p>
                <p>{avgRating} Stars</p>
            </div>
        </div>
    )
}

export default RestroCard;