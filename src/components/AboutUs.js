import { NavLink } from "react-router-dom";

const AboutUs = () => {

    return(<div className="about-us px-3 px-lg-5 mb-4   ">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<NavLink to="/advert">Advertising</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">About Us</span></div>
        <p>For our detailed price list and more information, please contact our sales team: <a href="mailto:sales@mediabuzz.com.sg">sales@mediabuzz.com.sg</a> or <a href="mailto:aem@mediabuzz.com.sg">aem@mediabuzz.com.sg</a>. Office line: +65 6836 1807  </p>
    </div>)
}

export default AboutUs;