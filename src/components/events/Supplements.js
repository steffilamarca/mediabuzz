import { NavLink } from "react-router-dom";
import supplements from "./../../assets/data/supplements.json"

const Supplements = () => {
    return(<div className="supplements-page w-75 mx-auto px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &gt; &nbsp; <NavLink to="/events/mediabuzz">MediaBUZZ Events</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Supplements</span></div>
        <div className="row mb-3">
            {supplements.map(supplement=><div className="col-6 mb-4">
                <h4 className="supplement-title-thumbnail">{supplement.title}</h4>
                <div className="supplement-thumbnail-wrapper me-2">
                    <img className="supplement-thumbnail" src={`/images/supplements/thumbnails/supplement-${supplement.supplementId}.webp`} alt={supplement.title}></img>
                </div>
                <p>{supplement.description.substring(0, 308)}...</p>
                <NavLink to={`/events/mediabuzz/supplements/${supplement.supplementId}`} className="read-more-btn btn btn-light">Read more...</NavLink>
            </div>)}
        </div>
    </div>)
}

export default Supplements;