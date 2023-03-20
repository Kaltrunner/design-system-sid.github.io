import React, { useState, useEffect } from 'react';

function Fullclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];


  const formattedTime = () => {
    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return  day + " - " + month + " " + d + " - " +  h + ":" + m + ":" + s ;
  }

  const checkTime = (i) => {
    if (i < 10) { i = "0" + i };
    return i;
  }

  return <div id="txt">{formattedTime()}</div>;
}

export default Fullclock;


// Month, day, year

// import React, { useState, useEffect } from 'react';

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//     let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];


//   const formattedTime = () => {
//     let y = time.getFullYear();
//     let month = months[time.getMonth()];
//     let d = time.getDate();
    
//     return   month + " " + d + " , " + y;
//   }

//   return <div id="landing-txt">{formattedTime()}</div>;
// }

// export default Clock;