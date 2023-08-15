"use client";

// WITH A LIBRARY OBS: Didn't work, error with hydration!
// import Countdown from "react-countdown";

// const endingDate = new Date("2023-08-15");

// const CountDown = () => {
//   return (
//     <Countdown
//       date={endingDate}
//       className="text-5xl text-yellow-300 font-bold"
//     />
//   );
// };

// export default CountDown;

// WITHOUT A LIBRARY
import React, { useState, useEffect } from "react";

const CountDown = () => {
  let difference = +new Date(`08/15/2023`) - +new Date();
  const [delay, setDelay] = useState(difference);

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <span
      className="font-bold text-5xl text-yellow-300"
      suppressHydrationWarning
    >
      {d < 10 ? `0${d}` : d}:{h < 10 ? `0${h}` : h}:{m < 10 ? `0${m}` : m}:
      {s < 10 ? `0${s}` : s}
    </span>
  );
};

export default CountDown;
