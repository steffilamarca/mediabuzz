import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return(<div className="contact-us px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Contact Us</span></div>
        <p>MediaBUZZ, launched in early 2004, is an independent online publisher in the Asia Pacific region focusing on the business of digital media and marketing. MediaBUZZ aims to make an impact in the region through its unique electronic InfoSource, Asian e-Marketing, and through its events relating to and serving these two industries.</p>
        <p>Asian e-Marketing is the first of its kind in the region and has been developed to empower e-marketers in the vibrant, ever-changing electronic marketing environment. It is distributed weekly to more than 60,000 top decision and marketing decision-makers in the region. Key sections include e-marketing tips, best practices and trends/statistics, legislation affecting e-marketing, training the spotlight on companies and their e-marketing campaigns and e-marketing leadership profiles.</p>
        <table className="contact-info mt-4 mb-4">
            <tbody>
                <tr>
                    <td className="contact-icon align-top text-center py-4 ps-4">
                        <FontAwesomeIcon icon={faLocationDot} size="2x"/>
                    </td>
                    <td className="py-3">
                        <p className="mb-3">MediaBUZZ Pte Ltd</p>
                        <p>50 Kaki Bukit Place</p>
                        <p>#04-01, Jean Yip Building</p>
                        <p>Singapore 415926</p>
                    </td>
                </tr>
                <tr>
                    <td className="contact-icon align-top text-center py-4 ps-4">
                        <FontAwesomeIcon icon={faMobileScreenButton} size="2x"/>
                    </td>
                    <td className="py-3">
                        <p>Phone: +65 6836 1807</p>
                        <p>Fax: +65 6235 1706</p>
                    </td>
                </tr>
                <tr>
                    <td className="contact-icon align-top text-center pt-4 pb-3 ps-4">
                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </td>
                    <td className="pt-3">
                        <p>Email: <a className="contact-us-link" href="mailto:info@mediabuzz.com.sg">info@mediabuzz.com.sg</a></p>
                        <p>Web: <a className="contact-us-link" href="http://www.mediabuzz.com.sg">http://www.mediabuzz.com.sg</a></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                    type="text"
                    className="form-control rounded-0"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                    type="email"
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="7"
                    required
                />
            </div>
            <button type="submit" className="send-message-btn btn rounded-0 mb-5">Send message</button>
        </form>
    </div>)
}

export default ContactUs;