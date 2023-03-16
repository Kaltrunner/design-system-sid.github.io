import Componentnav from "./Component-nav";
import Footer from "./Footer";
import { ScrollToTop } from "react-router-scroll-to-top";

function Images() {
  return (
    <>
      <Componentnav />
      <div className="colors-body-div">
        <div className="comp-header-div">
          <h1 className="comp-header-text">Images. / Grids.</h1>
          <div className="div-line"></div>
        </div>

        <div className="comp-content">
          <p className="image-container-text">
            <span className="h1-span">Image Grid</span> - 50%
          </p>
          <div className="images-contaner">
            <div className="image-div-50">
              <img
                src="https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />{" "}
            </div>
            <div className="image-div-50">
              <img
                src="https://images.unsplash.com/photo-1563118490-a6fbac646b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
          </div>

          <>
            <p className="image-container-text">
              <span className="h1-span">Image Grid</span> - 60% & 40%
            </p>
            <div className="images-contaner">
              <div className="image-div-60">
                <img src="https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="" />
              </div>
              <div className="image-div-40">
                <img
                  src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
          </>

          <p className="image-container-text">
            <span className="h1-span">Image Grid</span> - 33%
          </p>
          <div className="images-contaner">
            <div className="image-div-33">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
                alt=""
              />
            </div>
            <div className="image-div-33">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
            <div className="image-div-33">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
          </div>

          <p className="image-container-text">
            <span className="h1-span">Image Grid</span> - 25%
          </p>
          <div className="images-contaner">
            <div className="image-div-25">
              <img
                src="https://images.unsplash.com/photo-1445620466293-d6316372ab59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />
            </div>
            <div className="image-div-25">
              <img
                src="https://images.unsplash.com/photo-1563121167-bed76ebfa389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
            <div className="image-div-25">
              <img src="https://images.unsplash.com/photo-1504164996022-09080787b6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
            </div>
            <div className="image-div-25">
              <img
                src="https://images.unsplash.com/photo-1629324176054-faf971085b46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
          </div>

          <p className="image-container-text">
            <span className="h1-span">Image Grid</span> /{" "}
            <span className="h1-span">With 28px border-radius</span> - 25%
          </p>
          <div className="images-contaner">
            <div className="image-div-25-radius">
              <img
                src="https://images.unsplash.com/photo-1593687395549-400945fed803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="image-div-25-radius">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
            <div className="image-div-25-radius">
              <img
                src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt=""
              />
            </div>
            <div className="image-div-25-radius">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                alt=""
              />
            </div>
          </div>

          <p className="image-container-text">
            <span className="h1-span">Image Grid</span> /{" "}
            <span className="h1-span">Effects</span> - 25%
          </p>
          <div className="images-contaner">
            <div className="image-div-25" id="image-box-shadow">
              <p className="image-inside-text">box-shadow</p>
            </div>
            <div className="image-div-25" id="image-box-shadow-raised">
              <p className="image-inside-text">box-shadow-raised</p>
            </div>
            <div className="image-div-25" id="image-base-color">
              <p className="image-inside-text" id="base-color-text">
                base-color
              </p>
            </div>
            <div className="image-div-25" id="image-radius-box-shadow">
              <p className="image-inside-text">border-radius 28px / box-shadow</p>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

export default Images;
