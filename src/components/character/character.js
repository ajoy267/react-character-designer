import React from 'react';
import './character.css';

export default function Character({
  head,
  setHead,
  setHeadCount,
  middle,
  setMiddle,
  setMiddleCount,
  bottom,
  setBottom,
  setBottomCount,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };

  return (
    <div className="editor">
      <div className="form-control">
        <p>Head</p>
        <select value={head} onChange={handleHead}>
          <option value="bird-head">Bird</option>
          <option value="duck-head">Duck</option>
          <option value="dog-head">Dog</option>
          <option value="horse-head">Horse</option>
        </select>
      </div>
      <div className="form-control">
        <p>Middle</p>
        <select value={middle} onChange={handleMiddle}>
          <option value="blue-middle">Blue</option>
          <option value="dress-middle">Dress</option>
          <option value="pink-middle">Pink</option>
          <option value="red-middle">Red</option>
        </select>
      </div>
      <div className="form-control">
        <p>Bottom</p>
        <select value={bottom} onChange={handleBottom}>
          <option value="blue-pants">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="leg-pants">Leg Pants</option>
          <option value="white-pants">White Pants</option>
        </select>
      </div>
    </div>
  );
}
