import { NavLink } from "react-router-dom";

const Footer = () => {
    return(<>
        <div className="footer text-white pt-4 pb-2 px-3 px-lg-5">
            <div className="row">
                <div className="col-4">
                    <h3 className="footer-heading">ABOUT US</h3>
                    <p className="footer-text">MediaBUZZ is the first ‘pure’ digital publisher in the region, making an impact in Asia Pacific since 2004. Designed to empower marketers in the vibrant, ever-changing electronic marketing environment, its publication <NavLink to="/marketing">Asian eMarketing</NavLink> covers the digital age and zooms in on the most valuable and indispensable tools of today’s marketers. Circulated weekly to more than 60,000 top management and marketing decision-makers, the useful and informative articles support e-marketers in finding a sound marketing strategy, vital for their growing business success.</p>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <h3 className="footer-heading">CONTACT US</h3>
                    <p><strong>MediaBUZZ Pte Ltd</strong></p>
                    <p>Reg. No. 200407301C</p>
                    <p><strong>Phone: </strong>+65 6836 1807</p>
                    <p><strong>Fax: </strong>+65 6235 1706</p>
                    <p>General Contact:</p>
                    <p>info@mediabuzz.com.sg</p>
                </div>
            </div>
        </div>
        <div className="footer-footer text-white py-2 px-3 px-lg-5">
            <p>Privacy Policy |  Copyright © 2004-2023 MediaBUZZ Pte Ltd. Reg. No. 200407301C | <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/sg/" target="_blank" rel="noopener noreferrer"> All Rights Reserved </a></p>
        </div>
    </>)
}

export default Footer;