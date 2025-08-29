import { cardImgURl } from "../utils/constants"

const RestroCard = ({ restroInfo }) => {
    const { info } = restroInfo || {};
    const { name, cloudinaryImageId, avgRating, costForTwo } = info || {};
    return (
        <div data-testid="resCards" className="p-3 m-3 w-50 h-80 bg-gray-100 shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:bg-gray-200">
            <img className="w-50 h-40" src={`${cardImgURl}${cloudinaryImageId}`} />
            <hr />
            <div className="card-body">
                <p>{name}</p>
                <p>{costForTwo}</p>
                <p>{avgRating} Stars</p>
            </div>
        </div>
    )
}

export default RestroCard;