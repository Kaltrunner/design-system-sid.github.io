import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from 'react-router-scroll-to-top';

function Colors() {
    return (
        <>
           <Componentnav />
        <div className="colors-body-div" >
            <div className="comp-header-div" >
         <h1 className="comp-header-text" >Colors.</h1>
         <div className="div-line"></div>
         </div>
            <div className="comp-content" ></div>
            {/* <Footer /> */}
            <ScrollToTop />
        </div>
        <Footer />
        </>
    )
}

export default Colors