import React from 'react';
import Navbar from '../components/Navbar';
import Part1 from '../components/Part1';
import Part2 from '../components/Part2';
import Part3 from '../components/Part3';
import Part4 from '../components/Part4';
import Part5 from '../components/Part5';
import Part8 from '../components/Part8';
import Part9 from '../components/Part9';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part8 />
      <Part9 />
    </div>
  );
};

export default HomePage;

