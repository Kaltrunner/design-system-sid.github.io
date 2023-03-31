import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {

        const [currentPage, setCurrentPage] = useState("");

        useEffect(() => {
            setCurrentPage(window.location.pathname);
          }, []);

    return (
        <div className="nav-body-div" id="navbar" >

                <Link to="/Colors" className="section-link"  ><p className="nav-links" id={currentPage === "/Colors" ? "on" : ""} >Colors</p></Link>

                <Link to="/Components" className="section-link"  ><p className="nav-links" id={currentPage === "/Components" ? "on" : ""} >Components</p></Link>

                <Link to="/Images" className="section-link"  ><p className="nav-links" id={currentPage === "/Images" ? "on" : ""} >Layouts</p></Link>

                <Link to="/Forms" className="section-link"  ><p className="nav-links" id={currentPage === "/Forms" ? "on" : ""} >Forms</p></Link>

                <Link to="/Typography" className="section-link"  ><p className="nav-links right-side" id={currentPage === "/Typography" ? "on" : ""}  >Typography</p></Link>

        </div>
    )
}

export default Nav