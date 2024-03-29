import { ScrollToTop } from "react-router-scroll-to-top";
import Nav from "./Nav";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav />
      <div className="Main-body-div">
        <div className="h1-div">
          <h1 className="header-text" id="main-h1">
            Design
          </h1>
          <h1 className="header-text" id="main-h1">
            System
          </h1>
          <h1 className="header-text" id="main-h1">
            Sid<span className="main-span">.</span>
          </h1>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Main;
