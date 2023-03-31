import { Link } from "react-router-dom";

function Section() {
  return (
    <>
      <div className="section-body-div">
        <ul className="section-list">
          <Link to="/Colors" className="section-link">
            <p className="section-list-item">
              Colors<span className="section-link-dot">.</span>
            </p>
          </Link>

          <Link to="/Components" className="section-link">
            <p className="section-list-item">
              Components<span className="section-link-dot">.</span>
            </p>
          </Link>

          <Link to="/Images" className="section-link">
            <p className="section-list-item">
              Container layouts<span className="section-link-dot">.</span>
            </p>
          </Link>

          <Link to="/Forms" className="section-link">
            <p className="section-list-item">
              Forms<span className="section-link-dot">.</span>
            </p>
          </Link>

          <Link to="/Typography" className="section-link">
            <p className="section-list-item">
              Typography<span className="section-link-dot">.</span>
            </p>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Section;
