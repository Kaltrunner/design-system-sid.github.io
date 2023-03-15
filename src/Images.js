import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from 'react-router-scroll-to-top';

function Images() {
    return (
        <>
           <Componentnav />
        <div className="colors-body-div" >
            <div className="comp-header-div" >
         <h1 className="comp-header-text" >Images.</h1>
         <div className="div-line"></div>
         </div>
            <div className="comp-content" ></div>
            
            <ScrollToTop />
        </div>
        <Footer />
        </>
    )
}

export default Images