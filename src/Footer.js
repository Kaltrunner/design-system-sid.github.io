import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-body-div">

      <div className="div-line"></div>

      <div className="footer-content-div">
        <div className="footer-logo-div" >
          <Link className="tag" to="/" ><p id="footer-logo-text">Design</p>
          <p id="footer-logo-text">System</p>
          <p id="footer-logo-text">Sid.</p></Link>
        </div>
        <div className="footer-contact-info">
            {/* <p>Built & designed by: Erik Russell.</p>
            <br/> */}
          <p id="footer-logo-text" >
            Reach out
            <br />
            <a
              className="tag"
              id="reach-out-link"
              href="mailto:erikrussells@gmail.com?subject=Hello!"
            >
              erikrussells@gmail.com
            </a>
          </p>
          {/* <br/>
          <p>© 2023 Erik Russell<br/>all rights resurved.</p> */}
        </div>
        <div className="links" >
        <ul>

          <p className="footer-text" ><a className="tag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-russell-software-engineer/">LinkedIn.</a></p>

          <p className="footer-text" ><a className="tag" target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner" >GitHub.</a></p>

          {/* <p className="footer-text" ><a className="tag" target="_blank" rel="noreferrer" href="https://medium.com/@erikrussells">Blog.</a></p> */}

          <p className="footer-text" ><a className="tag" target="_blank" rel="noreferrer" href="https://www.erikmrussell.com">Portfolio.</a></p>

          
        </ul>
        </div>
          
      </div>
      <div className="info-div" >
        {/* <p>Built & designed by: Erik Russell</p> */}
    
        <p>© 2023 Erik Russell<br/>all rights resurved.</p>
        </div>
    </div>
  );
}

export default Footer;
