import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {

        const [currentPage, setCurrentPage] = useState("");

        useEffect(() => {
            setCurrentPage(window.location.pathname);
          }, []);

          window.onscroll = function () {
            scrollFunction();
          };
          
          function scrollFunction() {
            if (
              document.body.scrollTop > 600 ||
              document.documentElement.scrollTop > 600
            ) {
              document.getElementById("navbar").style.top = "-115px";
            } else {
              document.getElementById("navbar").style.top = "0";
            }
          }

    return (
        <div className="nav-body-div" id="navbar" >

                <Link to="/Colors" className="section-link"  ><p className="nav-links" id={currentPage === "/Colors" ? "on" : ""} >colors.</p></Link>

                <Link to="/Components" className="section-link"  ><p className="nav-links" id={currentPage === "/Components" ? "on" : ""} >components.</p></Link>

                <Link to="/Images" className="section-link"  ><p className="nav-links" id={currentPage === "/Images" ? "on" : ""} >images.</p></Link>

                {/* <Link to="/Fonts" className="section-link"  ><p className="nav-links" id={currentPage === "/Fonts" ? "on" : ""} >fonts.</p></Link> */}

                <Link to="/Forms" className="section-link"  ><p className="nav-links" id={currentPage === "/Forms" ? "on" : ""} >forms.</p></Link>

                <Link to="/Typography" className="section-link"  ><p className="nav-links" id={currentPage === "/Typography" ? "on" : ""}  >typography.</p></Link>

        </div>
    )
}

export default Nav