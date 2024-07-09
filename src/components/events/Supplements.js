import { NavLink } from "react-router-dom";

const Supplements = () => {
    return(<div className="supplements-page px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &gt; &nbsp; <NavLink exact to="/events/mediabuzz">MediaBUZZ Events</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Supplements</span></div>
        Supplements
    </div>)
}

export default Supplements;