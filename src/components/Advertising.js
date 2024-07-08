import { NavLink } from "react-router-dom";

const Advertising = () => {
    return(<div className="advertising px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Advertising</span></div>
        <h2 className="media-kit">MEDIA KIT 2022</h2>
        <h6>Category: <NavLink to="/about-us">About Us</NavLink></h6>
    </div>)
}

export default Advertising;