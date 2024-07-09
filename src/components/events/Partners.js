import { NavLink } from "react-router-dom";
import events from "./../../assets/data/events.json"

const Partners = () => {

    const partnerEvents = events.filter(event => event.category === "Partner Events");

    return(<div className="partner-datails px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Media Partners Events</span></div>
        <h2 className="page-heading">PARTNERSHIP EVENTS</h2>
        {partnerEvents.map(event => (
            <div key={event.eventId} className="text-center">
                <hr className="text-secondary"/>
                {event.image && <img src={`/images/events/${event.image}.webp`} alt={event.name} className="img-fluid mb-3" />}
            </div>
        ))}
    </div>)
}

export default Partners;