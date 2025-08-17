const RestroCard = ({ restroInfo }) => {
    const { info } = restroInfo || {};
    const { name, cloudinaryImageId } = info || {};
    return (
        <div className="restro-card">
            <img className="card-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <hr />
            <div className="card-body">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default RestroCard;