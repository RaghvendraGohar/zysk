import React from "react";
import "../css/Part1.css";

const Part1 = () => {
  return(
    <div className="part1">
      <h1 id="p1">Beautiful analytics to grow smarter</h1>
      <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      <div className="bContainer">
      <button className="Demo">Demo</button>
      <button className="Sign">Sign Up</button>
      </div>
      <img id="s1" src="S1.png" alt="Analytics" />
    </div>
  )
};

export default Part1;
