const ItemList = ({ item, showDetails, setOpenItem }) => {
    const { title, itemCards } = item || {};
    return (
      <div>
        <div 
          className="p-2 my-2 bg-gray-100 w-200 flex justify-between shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
          onClick={setOpenItem}
        >
            <div>{title} ({itemCards.length})</div>
            <div>{"⬇️"}</div>
        </div>
        {showDetails && <div>
          {(itemCards || []).map((itemCard) => {
            const { info } = itemCard?.card || {};
            const { id, name, description, imageId } = info || {};
            return (
              <div key={id} className="flex w-200 p-2 my-2 bg-gray-100">
                <div className="w-8/12">
                  <div className="font-bold">{name}</div>
                  <div>{description}</div>
                </div>
                <div className="w-4/12">
                  <img 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/"+imageId}
                  />
                </div>
              </div>
            )
          })}
        </div>}
      </div> 
    )
}

export default ItemList;