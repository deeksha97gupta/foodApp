import ItemCard from "./ItemCard";

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
          {(itemCards || []).map((itemCard) => <ItemCard key={itemCard?.card?.info?.id} itemCard={itemCard} />)}
        </div>}
      </div> 
    )
}

export default ItemList;