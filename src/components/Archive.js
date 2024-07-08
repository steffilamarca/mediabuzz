import { NavLink } from "react-router-dom";

const Archive = () => {
    return(<div className="px-3 px-lg-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Archive</span></div>
        Archive
    </div>)
}

export default Archive;