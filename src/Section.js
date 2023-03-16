import { Link } from "react-router-dom";
import Footer from "./Footer";

function Section() {
    return (
        <>
        <div className="section-body-div" >
            <ul className="section-list" >

            <Link to="/Colors" className="section-link" ><p className="section-list-item" >colors<span className="section-link-dot" >.</span></p></Link>

            <Link to="/Components" className="section-link" ><p className="section-list-item" >components<span className="section-link-dot" >.</span></p></Link>

            <Link to="/Images" className="section-link" ><p className="section-list-item" >images<span className="section-link-dot" >.</span></p></Link>

            {/* <Link to="/Fonts" className="section-link" ><p className="section-list-item" >fonts<span className="section-link-dot" >.</span></p></Link> */}

            <Link to="/Forms" className="section-link" ><p className="section-list-item" >forms<span className="section-link-dot" >.</span></p></Link>

            <Link to="/Typography" className="section-link" ><p className="section-list-item" >typography<span className="section-link-dot" >.</span></p></Link>


            </ul>

       

        </div>
         <Footer />
         </>
    )
}

export default Section