import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {

    return (
        <div className="list-container">
            {travelPlansData.map((currentItem) => {
                console.log(currentItem)
                return (
                    <div className="itemContainer" key={currentItem.id}>
                        <div><img className="images" src={currentItem.image} alt="" /></div>
                        <div className="item-info">
                            <div className="item-destination">
                                {currentItem.destination} ({currentItem.days} Days)
                            </div>
                            <div> {currentItem.description}</div>
                            <div><span className="price">Price:</span> {currentItem.totalCost} €</div>
                            <div className="labels">
                                <div className="label">{currentItem.totalCost <= 350 && "Great Deal"}</div>
                                <div className="label">{currentItem.totalCost >= 1500 && "Premium"}</div>
                                <div className="label">{currentItem.allInclusive && "All Inclusive"}</div>
                            </div>



                        </div>



                    </div>
                )
            })}
        </div>
    );
}

export default TravelList;