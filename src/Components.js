import Componentnav from "./Component-nav";
import Footer from "./Footer";
import Clock from "./Clock";
import Fullclock from "./Fullclock";
import { ScrollToTop } from "react-router-scroll-to-top";

function Components() {
  return (
    <>
      <Componentnav />
      <div className="colors-body-div">
        <div className="comp-header-div">
          <h1 className="comp-header-text">Components.</h1>
        </div>

        <div className="comp-content">
          <div className="comp-button-div">
            <p className="h1-span">Buttons</p>
            <button className="primary-btn">Primary</button>
            <button className="secondary-btn">Secondary</button>
            <button className="inline-btn">Inline</button>
          </div>

          <div className="comp-button-div" id="comp-needsmore-room-div">
            <p className="h1-span">Radio</p>

            <label className="radio-container">
              <input type="checkbox" />
              <span className="radio"></span>
            </label>
          </div>

          <div className="comp-button-div">
            <p className="h1-span">Search bar</p>

            <div class="comp-wrap">
              <div class="comp-search">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Type to search"
                />
                <button type="submit" class="searchButton">
                  <p class="fa-fa-search">search</p>
                </button>
              </div>
            </div>
          </div>

          <div className="comp-button-div">
            <p>
              <span className="h1-span">Clock</span> - with full date & time
            </p>
            <Fullclock />
          </div>

          <div className="comp-button-div">
            <p>
              <span className="h1-span">Clock</span> - date & year
            </p>
            <Clock />
          </div>

          <div className="comp-button-div" id="comp-needsmore-room-div">
            <p className="h1-span">Checkbox</p>

            <label class="check-container">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="comp-button-div">
            <p className="h1-span">Toggle</p>

            <input className="toggle" id="round-toggle" type="checkbox" />
          </div>

          <div className="comp-button-div">
            <p className="h1-span">Dropdown Menu</p>
            <div className="dropdown-div">
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default Components;
