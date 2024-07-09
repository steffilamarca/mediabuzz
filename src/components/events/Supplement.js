
import { NavLink, useParams  } from "react-router-dom";
import supplements from "./../../assets/data/supplements.json"

const Supplement = () => {

    const { id } = useParams(); // Destructure id from useParams

    // // Find the supplement with the matching supplementId
    const supplement = supplements.find(supplement => supplement.supplementId === id);

    return(<div className="supplement-page px-3 px-lg-5 mb-4">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &gt; &nbsp; <NavLink exact to="/events/mediabuzz">MediaBUZZ Events</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">Supplements</span></div>
        <h2 className="page-heading">{supplement.title}</h2>
        <img className="supplement-image ms-4" src={`/images/supplements/supplement-${supplement.supplementId}.webp`}></img>
        <hr className="text-muted"/>
        {supplement.description.text.split("\n\n").map((paragraph, index) => (
            <p className="mb-3" key={index}>{paragraph}</p>
        ))}
        {supplement.links && <ul>
            {supplement.links.map(link => <li>
                {link.pdf ? <a href={`/pdfs/supplements/${link.pdf}.pdf`} target="_blank" rel="noopener noreferrer">{link.title}</a> : <p>{link.title}</p>}
                {link.description && <p>{link.description}</p>}
            </li>)}
        </ul>}
    </div>)
}

export default Supplement;