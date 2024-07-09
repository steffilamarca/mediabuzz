import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

  const sampleList = [
    {
      name: "article 1",
      link: "#"
    },
    {
      name: "article 2",
      link: "#"
    },
    {
      name: "article 3",
      link: "#"
    }
  ]

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % sampleList.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [sampleList.length]);

  return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-2 px-lg-4">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/archive">ARCHIVE</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/marketing">ASIAN E-MARKETING</NavLink>
          </li>
          <li className="nav-item dropdown">
              <p className="nav-link">EVENTS</p>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/events/partners">Media Partners' Events</NavLink>
                </li>
                <li className="dropdown-submenu">
                  <NavLink className="dropdown-item" to="/events/mediabuzz">MediaBUZZ Events</NavLink>
                  <ul className="dropdown-menu-right">
                    <li>
                      <NavLink className="dropdown-item dropdown-item-right" to="/events/mediabuzz/details1">Supplements</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item dropdown-item-right" to="/events/mediabuzz/details2">Past Events</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/events/partners/details">Media Partners' Events Details</NavLink>
                </li>
              </ul>
            </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/subscribe">SUBSCRIPTION</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/advert">ADVERTISING</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="row mx-3 px-lg-3">
      <div className="latest-news col-2 border border-dark d-flex justify-content-center align-items-center">
        LATEST NEWS
      </div>
      <div className="article-fluctuation col-6 border border-dark d-flex align-items-center">
        {sampleList.map((article, index) => (
          <a key={index} href={article.link} className={`article-item ${index === currentArticleIndex ? 'active' : ''}`}>
            {article.name}
          </a>
        ))}</div>
      <div className="col-4 border border-dark d-flex align-items-center">
        <input type="text" className="searchbar form-control rounded-5" placeholder="Search..."/>
      </div>
    </div>
    <hr className="header-hr"/>
  </>)
}

export default Header;  