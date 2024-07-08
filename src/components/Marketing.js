import { NavLink } from "react-router-dom";

const Marketing = () => {
    return(<div className="px-3 px-lg-5">
        <div className="row">
            <div className="col-8">
                <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Asian e-Marketing</span></div>
                </div>
            <div className="col-4"></div>
        </div>
            Asian e-Marketing
    </div>)
}

export default Marketing;