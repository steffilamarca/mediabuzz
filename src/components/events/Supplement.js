
import { NavLink, useParams  } from "react-router-dom";
import supplements from "./../../assets/data/supplements.json"

const Supplement = () => {

    const { id } = useParams();
    const supplement = supplements.find(supplement => supplement.supplementId === Number(id));

    return(<div className="supplement-page w-75 mx-auto px-3 px-lg-5 mb-5">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;Events &gt; &nbsp; <NavLink to="/events/mediabuzz">MediaBUZZ Events</NavLink> &nbsp; &gt; &nbsp; <NavLink to="/events/mediabuzz/supplements">Supplements</NavLink> &nbsp; &gt; &nbsp; <span className="breadcrumb-selected">{supplement.title}</span></div>
        <h2 className="page-heading">{supplement.title}</h2>
        <img className="supplement-image ms-4" src={`/images/supplements/supplement-${supplement.supplementId}.webp`} alt={supplement.title}></img>
        <hr className="text-muted"/>
        {supplement.description.split("\n\n").map((paragraph, index) => (
            <p className="mb-3" key={index}>{paragraph}</p>
        ))}
        {supplement.links && <ul className="mb-4">
            {supplement.links.map(link => <li>
                {link.pdf ? <a href={`/pdfs/supplements/${link.pdf}.pdf`} target="_blank" rel="noopener noreferrer">{link.name}</a> : <p>{link.name}</p>}
                {link.description && <p>{link.description}</p>}
            </li>)}
        </ul>}
        {supplement.credits && <div className="row">
            {supplement.credits.map(credit => <div className="col-4 text-center my-auto">
                <a href={credit.link} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/supplements/credits/${credit.image}.webp`} alt={credit.description}></img>
                </a>
                {credit.description.split("\n\n").map((information, index) => (
                    <p className="" key={index}>{information}</p>
                ))}
            </div>)}
        </div>}
    </div>)
}

export default Supplement;