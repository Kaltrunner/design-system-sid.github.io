import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

function Typography() {
  return (
    <>
      <Componentnav />
      <div className="colors-body-div">
        <div className="comp-header-div">
          <h1 className="comp-header-text">Typography.</h1>
          <div className="div-line"></div>
        </div>
        <div className="comp-content">
          <div className="text-info-div">
            <p className="font-card-info" >Font type: <br/>Noto Sans</p>
            {/* <div className="font-card" >
            <p className="font-card-letter" >A</p><p className="font-card-letter-low" >a</p>
            </div>
            <div className="font-card" >
            <p className="font-card-letter" >B</p><p className="font-card-letter-low" >b</p>
            </div>
            <div className="font-card" >
            <p className="font-card-letter" >C</p><p className="font-card-letter-low" >c</p>
            </div> */}
          </div>
          <dev text-body-div>
            <div className="text-div">
              <p>H1 / <span className="h1-span" >Header</span> - weight 600</p>
              <p className="text-text" id="text-h1">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>H1 / <span className="h1-span" >Logo Header</span> - weight 400</p>
              <p className="text-text" id="text-h2">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            {/* <div className="text-div">
              <p>H3 - weight 400</p>
              <p className="text-text" id="text-h3">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div> */}

            <div className="text-div">
              <p>H4 / <span className="h1-span" >Sub-Header</span> - weight 400</p>
              <p className="text-div" id="text-h4">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            {/* <div className="text-div">
              <p>H5 - weight 400</p>
              <p className="text-div" id="text-h5">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div> */}

            <div className="text-div">
              <p>H6 / <span className="h1-span" >Title Text</span> - weight 600</p>
              <p className="text-div" id="text-h6">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>p / <span className="h1-span" >Paragraph</span> - weight 400</p>
              <p className="text-div" id="text-p">
              Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="par-div" >
                <p className="h1-span" >Paragraph - 100%</p>
                <p className="par-text" id="text100" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Upang madagdagan ang halaga, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </div>

            <div className="par-div" >
                <p className="h1-span" >Paragraph - 75%</p>
                <p className="par-text" id="text75" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Upang madagdagan ang halaga, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </div>

            <div className="par-div" >
                <p className="h1-span" >Paragraph - 50%</p>
                <p className="par-text" id="text50" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Upang madagdagan ang halaga, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </div>

            <div className="par-div" >
                <p className="h1-span" >Paragraph - 25%</p>
                <p className="par-text" id="text25" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Upang madagdagan ang halaga, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </div>

          </dev>
        </div>

        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

export default Typography;
