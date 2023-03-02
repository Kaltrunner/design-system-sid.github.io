import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {

        const [currentPage, setCurrentPage] = useState("");

        useEffect(() => {
            setCurrentPage(window.location.pathname);
          }, []);

    return (
        <div className="nav-body-div" >

                <Link to="/" className="section-link"  ><p className="nav-links" > # </p></Link>

                <Link to="/Colors" className="section-link"  ><p className="nav-links" id={currentPage === "/Colors" ? "on" : ""} >colors.</p></Link>

                <p className="nav-links" >components.</p>

                <p className="nav-links" >images.</p>

                <p className="nav-links" >forms.</p>

                <Link to="/Typography" className="section-link"  ><p className="nav-links" id={currentPage === "/Typography" ? "on" : ""}  >typography.</p></Link>

        </div>
    )
}

export default Nav