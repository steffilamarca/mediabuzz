import { NavLink } from "react-router-dom";
import events from "./../../assets/data/events.json"

const PartnersDetails = () => {

    const partnerEvents = events.filter(event => event.category === "Partner Events");

    return(<div className="partner-datails px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Media Partners Events Details</span></div>
        <h2 className="page-heading">MEDIA PARTNERS EVENTS DETAILS</h2>
        <table className="partner-details-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Event Description</th>
                </tr>
            </thead>
            <tbody>
            {partnerEvents.map(event => (
                <tr key={event.eventId}>
                <td className="text-center align-top">{event.date}</td>
                <td className="text-center align-top">{event.venue}</td>
                <td>
                    <p>{event.description}</p>
                    {event.links && event.eventHomepage && <p>
                    Event homepage - <a href={event.links.eventHomepage}>{event.links.eventHomepage}</a>
                    </p>}
                    <ul>
                    {event.links && event.links.socialMedia && Object.entries(event.links.socialMedia).map(([platform, url]) => (
                        <li key={platform}>
                            <a href={url}>{platform}</a>
                        </li>
                    ))}
                    </ul>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}

export default PartnersDetails;