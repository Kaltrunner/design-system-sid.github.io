import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

function Colors() {
  return (
    <>
      <Componentnav />
      <div className="colors-body-div">
        <div className="comp-header-div">
          <h1 className="comp-header-text">Colors.</h1>
          <div className="div-line"></div>
        </div>
        <div className="comp-content">
        <div className="palette-div" >
          <p className="font-card-info-span" >Color Palette: </p>
          </div>
       
          <div className="extra-stuff-div">
            

            <div className="outer">
              <div className="inner"></div>
            </div>
            <p className="hex-text">#000</p>

            <div className="outer">
              <div className="inner" id="blue"></div>
            </div>
            <p className="hex-text">#0827F5</p>

            <div className="outer">
              <div className="inner" id="drk-grey"></div>
            </div>
            <p className="hex-text">#929292</p>

            <div className="outer">
              <div className="inner" id="grey"></div>
            </div>
            <p className="hex-text">#ececec</p>

            {/* <div className="outer" id="outer-white">
              <div className="inner" id="lt-grey"></div>
            </div>
            <p className="hex-text">#F5F5F5</p> */}
          </div>
          <div className="div-line"></div>

          <div className="color-grid-container">
            <div className="color-grid-div">
              <p>
                <span className="h1-span">Black</span> - #000
              </p>
              <div className="color-grid" id="black-1" ></div>
              <div className="color-grid" id="black-2" ></div>
              <div className="color-grid" id="black-3" ></div>
              <div className="color-grid" id="black-4" ></div>
              <div className="color-grid" id="black-5" ></div>
              <div className="color-grid" id="black-6" ></div>
              <div className="color-grid" id="black-7" ></div>
              <div className="color-grid" id="black-8" ></div>
              <div className="color-grid" id="black-9" ></div>
            </div>

            <div className="color-grid-div">
              <p>
                <span className="h1-span">Blue</span> - #0827F5
              </p>
              <div className="color-grid" id="blue-10" ></div>
              <div className="color-grid" id="blue-11" ></div>
              <div className="color-grid" id="blue-12" ></div>
              <div className="color-grid" id="blue-13" ></div>
              <div className="color-grid" id="blue-14" ></div>
              <div className="color-grid" id="blue-15" ></div>
              <div className="color-grid" id="blue-16" ></div>
              <div className="color-grid" id="blue-17" ></div>
              <div className="color-grid" id="blue-18" ></div>
              <br/>
              <div className="color-grid" id="blue-1" ></div>
              <div className="color-grid" id="blue-2" ></div>
              <div className="color-grid" id="blue-3" ></div>
              <div className="color-grid" id="blue-4" ></div>
              <div className="color-grid" id="blue-5" ></div>
              <div className="color-grid" id="blue-6" ></div>
              <div className="color-grid" id="blue-7" ></div>
              <div className="color-grid" id="blue-8" ></div>
              <div className="color-grid" id="blue-9" ></div>
            </div>

            <div className="color-grid-div">
              <p>
                <span className="h1-span">drk.Grey</span> - #929292
              </p>
              <div className="color-grid" id="drk-grey-10" ></div>
              <div className="color-grid" id="drk-grey-11" ></div>
              <div className="color-grid" id="drk-grey-12" ></div>
              <div className="color-grid" id="drk-grey-13" ></div>
              <div className="color-grid" id="drk-grey-14" ></div>
              <div className="color-grid" id="drk-grey-15" ></div>
              <div className="color-grid" id="drk-grey-16" ></div>
              <div className="color-grid" id="drk-grey-17" ></div>
              <div className="color-grid" id="drk-grey-18" ></div>
              <br/>
              <div className="color-grid" id="drk-grey-1" ></div>
              <div className="color-grid" id="drk-grey-2" ></div>
              <div className="color-grid" id="drk-grey-3" ></div>
              <div className="color-grid" id="drk-grey-4" ></div>
              <div className="color-grid" id="drk-grey-5" ></div>
              <div className="color-grid" id="drk-grey-6" ></div>
              <div className="color-grid" id="drk-grey-7" ></div>
              <div className="color-grid" id="drk-grey-8" ></div>
              <div className="color-grid" id="drk-grey-9" ></div>
            </div>

            <div className="color-grid-div">
              <p>
                <span className="h1-span">Grey</span> - #ececec
              </p>
              <div className="color-grid" id="grey-10" ></div>
              <div className="color-grid" id="grey-11" ></div>
              <div className="color-grid" id="grey-12" ></div>
              <div className="color-grid" id="grey-13" ></div>
              <div className="color-grid" id="grey-14" ></div>
              <div className="color-grid" id="grey-15" ></div>
              <div className="color-grid" id="grey-16" ></div>
              <div className="color-grid" id="grey-17" ></div>
              <div className="color-grid" id="grey-18" ></div>
              <br/>
              <div className="color-grid" id="grey-1" ></div>
              <div className="color-grid" id="grey-2" ></div>
              <div className="color-grid" id="grey-3" ></div>
              <div className="color-grid" id="grey-4" ></div>
              <div className="color-grid" id="grey-5" ></div>
              <div className="color-grid" id="grey-6" ></div>
              <div className="color-grid" id="grey-7" ></div>
              <div className="color-grid" id="grey-8" ></div>
              <div className="color-grid" id="grey-9" ></div>
              
            </div>

            {/* <div className="color-grid-div">
              <p>
                <span className="h1-span">lt.Grey</span> - #F5F5F5
              </p>
              <div className="border-div" >
              <div className="color-grid" id="lt-grey-1" ></div>
              <div className="color-grid" id="lt-grey-2" ></div>
              <div className="color-grid" id="lt-grey-3" ></div>
              <div className="color-grid" id="lt-grey-4" ></div>
              <div className="color-grid" id="lt-grey-5" ></div>
              <div className="color-grid" id="lt-grey-6" ></div>
              <div className="color-grid" id="lt-grey-7" ></div>
              <div className="color-grid" id="lt-grey-8" ></div>
              <div className="color-grid" id="lt-grey-9" ></div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <Footer /> */}
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

export default Colors;
