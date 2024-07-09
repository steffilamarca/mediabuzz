import { NavLink } from "react-router-dom";
import supplements from "./../../assets/data/supplements.json"

const Supplements = () => {
    return(<div className="supplements-page px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &gt; &nbsp; <NavLink exact to="/events/mediabuzz">MediaBUZZ Events</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Supplements</span></div>
        <div className="row mb-4">
            {supplements.map(supplement=><div className="col-6">
                <h4 className="supplement-title-thumbnail">{supplement.title}</h4>
                <div className="supplement-thumbnail-wrapper me-2">
                    <img className="supplement-thumbnail" src={`/images/supplements/thumbnails/supplement-${supplement.supplementId}.webp`}></img>
                </div>
                <p>{supplement.description.text.substring(0, 308)}...</p>
                <button className="read-more-btn btn btn-light">Read more...</button>
            </div>)}
        </div>
    </div>)
}

export default Supplements;