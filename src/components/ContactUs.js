import { NavLink } from "react-router-dom";

const ContactUs = () => {
    return(<div className="about-us px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Contact Us</span></div>
        <p>MediaBUZZ, launched in early 2004, is an independent online publisher in the Asia Pacific region focusing on the business of digital media and marketing. MediaBUZZ aims to make an impact in the region through its unique electronic InfoSource, Asian e-Marketing, and through its events relating to and serving these two industries.</p>
        <p>Asian e-Marketing is the first of its kind in the region and has been developed to empower e-marketers in the vibrant, ever-changing electronic marketing environment. It is distributed weekly to more than 60,000 top decision and marketing decision-makers in the region. Key sections include e-marketing tips, best practices and trends/statistics, legislation affecting e-marketing, training the spotlight on companies and their e-marketing campaigns and e-marketing leadership profiles.</p>
        <table>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <p>MediaBUZZ Pte Ltd</p>
                        <p></p>
                        <p>50 Kaki Bukit Place</p>
                        <p>#04-01, Jean Yip Building</p>
                        <p>Singapore 415926</p>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <p>Phone: +65 6836 1807</p>
                        <p>Fax: +65 6235 1706</p>
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default ContactUs;