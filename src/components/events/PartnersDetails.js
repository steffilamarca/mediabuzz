import { NavLink } from "react-router-dom";
import events from "./../../assets/data/events.json"

const PartnersDetails = () => {

    const partnerEvents = events.filter(event => event.category === "Partner Events");

    return(<div className="partner-datails px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Media Partners Events Details</span></div>
        <h2 className="page-heading">MEDIA PARTNERS EVENTS DETAILS</h2>
        <table className="partner-details-table mb-5">
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
                    {event.heading && <p className="fw-bold text-center">{event.heading}</p>}
                    {event.subheading && <p className="text-center mb-4">{event.subheading}</p>}
                    {event.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                    {event.links && (<>
                        {event.links.eventHomepage && (
                            <p className="mb-4">
                                Event homepage - <a href={event.links.eventHomepage}>{event.links.eventHomepage}</a>
                            </p>
                        )}
                        {event.links.socialMedia && (
                            <ul className="mb-4">
                                {Object.entries(event.links.socialMedia).map(([platform, url]) => (
                                    <li key={platform}>
                                        {platform}: <a href={url}>{url}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {event.links.secureSeatAt && (
                            <p className="fw-bold text-center">
                                Secure your seat at: <a className="fw-normal" href={event.links.secureSeatAt}>{event.links.secureSeatAt}</a>
                            </p>
                        )}
                        {event.links.requestBrochureAt && (
                            <p className="fw-bold text-center">
                                Request for Brochure: <a className="fw-normal" href={event.links.requestBrochureAt}>{event.links.requestBrochureAt}</a>
                            </p>
                        )}
                        {event.links.officialWebsite && (
                            <p className="fw-bold text-center">
                                Official website: <a className="fw-normal" href={event.links.officialWebsite}>{event.links.officialWebsite}</a>
                            </p>
                        )}
                    </>)}
                    {event.contact && <p className="text-center mb-4">For further inquiries, please contact {event.contact.name} | {event.contact.phone} | <a href={`mailto:${event.contact.email}`}>{event.contact.email}</a></p>}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
}

export default PartnersDetails;