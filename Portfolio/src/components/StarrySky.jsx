import React, { useState, useEffect } from "react";
import '../assets/styles/Stars.css';
import anime from 'animejs/lib/anime.es.js';

const StarrySky = () => {
  const [num] = useState(200);
  const [vw] = useState(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  );
  const [vh] = useState(
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  );

  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  const shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 200 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [
        { value: "150px" },
        { value: "0px" }
      ],
      translateX: 1000,
      duration: 2000
    });
  };

  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const getRandomX = () => Math.floor(Math.random() * window.innerWidth).toString();
  const getRandomY = () => Math.floor(Math.random() * window.innerHeight).toString();

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []); // Runs only once after component mounts

  return (
    <div id="sky-header" class='star-container'>
      <h1 class='intro' id='name'>Jordan Kelsey</h1>
      <h2 class='intro' id='sub-title'>Software Developer</h2>
      <svg id="sky">
        {[...Array(num)].map((x, y) => (
          <circle
            key={y}
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(80)].map((x, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomX()}px`,
              top: `${getRandomY()}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
