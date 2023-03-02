// import { useState, useEffect } from "react";

function ProgressBar({ progress }) {

    // const [percentage, setPercentage] = useState(0);

    // useEffect(() => {
    //     setPercentage(Math.round(1 * 100));
    //   }, [progress]);

  return (
    <div className="progressbar-body-div">
       
      <div className="progress">

      {/* <div className="loading-bar">
      <div className="progress" style={{ width: `${percentage}%` }}>
        <span className="percentage">{percentage}%</span>
      </div>
    </div> */}

      <p className="progress-text" >Loading...</p>
        <div class="color"></div>
      </div>

    </div>
  );
}

export default ProgressBar;
