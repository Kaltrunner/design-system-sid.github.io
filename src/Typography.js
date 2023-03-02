import Nav from "./Nav";
// import Footer from "./Footer";
import { ScrollToTop } from 'react-router-scroll-to-top';

function Typography() {
    return (
        <div className="typography-body-div" >
            <Nav />
            <div className="Colors-content" ></div>
            {/* <Footer /> */}
            <ScrollToTop />
        </div>
    )
}

export default Typography