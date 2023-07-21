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
        </div>
        <div className="comp-content">
          <div className="text-info-div">
            <p>
              <span className="font-card-info-span">Font / Karla: </span>
              <br />
              <span className="font-card-info-letter-span">AaBbCc</span>
            </p>
            <div className="abc-div">
              <div>
                <p className="font-card-info-span">Letters & Numbers: </p>
                <p className="abc-text">
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                  <br />0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
          </div>
          <div className="div-line"></div>
          <dev text-body-div>
            <div className="text-div">
              <p>
                H1 / <span className="h1-span">Header</span> - weight 300
              </p>
              <p className="text-text" id="text-h1">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>
                H1 / <span className="h1-span">Logo Header</span> / Font /
                Fragment Mono - weight 300
              </p>
              <p className="text-text" id="text-h2">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>
                H4 / <span className="h1-span">Sub-Header</span> - weight 400
              </p>
              <p className="text-div" id="text-h4">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>
                H6 / <span className="h1-span">Title Text</span> - weight 300
              </p>
              <p className="text-div" id="text-h6">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="text-div">
              <p>
                p / <span className="h1-span">Paragraph</span> - weight 400
              </p>
              <p className="text-div" id="text-p">
                Jack og Jill fóru upp hæðina til að sækja vatnsbönn.
              </p>
            </div>

            <div className="par-div">
              <p>
                p / <span className="p-span">Paragraph</span> - 100%
              </p>
              <p className="par-text" id="text100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Upang madagdagan ang halaga, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>

            <div className="par-div">
              <p>
                p / <span className="p-span">Paragraph</span> - 75%
              </p>
              <p className="par-text" id="text75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Upang madagdagan ang halaga, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>

            <div className="par-div">
              <p>
                p / <span className="p-span">Paragraph</span> - 50%
              </p>
              <p className="par-text" id="text50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Upang madagdagan ang halaga, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>

            <div className="par-div">
              <p>
                p / <span className="p-span">Paragraph</span> - 25%
              </p>
              <p className="par-text" id="text25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Upang madagdagan ang halaga, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </dev>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Typography;
