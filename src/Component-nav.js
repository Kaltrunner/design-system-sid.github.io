import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Componentnav() {

        const [currentPage, setCurrentPage] = useState("");

        useEffect(() => {
            setCurrentPage(window.location.pathname);
          }, []);

          // window.onscroll = function () {
          //   scrollFunction();
          // };
          
          // function scrollFunction() {
          //   if (
          //     document.body.scrollTop > 300 ||
          //     document.documentElement.scrollTop > 300
          //   ) {
          //     document.getElementById("comp-navbar").style.top = "0";
          //   } else {
          //     document.getElementById("comp-navbar").style.top = "-120px";
          //   }
          // }

    return (

        <>
        
        <div className="nav-body-div" id="comp-navbar" >
        

                <Link to="/" className="section-link"  ><p className="nav-links" > # </p></Link>

                <Link to="/Colors" className="section-link"  ><p className="nav-links" id={currentPage === "/Colors" ? "on" : ""} >Colors</p></Link>

                <Link to="/Components" className="section-link"  ><p className="nav-links" id={currentPage === "/Components" ? "on" : ""} >Components</p></Link>

                <Link to="/Images" className="section-link"  ><p className="nav-links" id={currentPage === "/Images" ? "on" : ""} >Container layouts</p></Link>
                
                {/* <Link to="/Fonts" className="section-link"  ><p className="nav-links" id={currentPage === "/Fonts" ? "on" : ""} >fonts.</p></Link> */}

                <Link to="/Forms" className="section-link"  ><p className="nav-links" id={currentPage === "/Forms" ? "on" : ""} >Forms</p></Link>

                <Link to="/Typography" className="section-link"  ><p className="nav-links" id={currentPage === "/Typography" ? "on" : ""}  >Typography</p></Link>

        </div>
        
        </>
    )
}

export default Componentnav;