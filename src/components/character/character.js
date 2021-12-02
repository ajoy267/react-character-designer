import React from 'react';

export default function Character({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  return (
    <div className="character-editor">
      <div className="form-control">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird-head">Bird</option>
          <option value="duck-head">Duck</option>
          <option value="dog-head">Dog</option>
          <option value="horse-head">Horse</option>
        </select>
      </div>
      <div className="form-control">
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
          <option value="blue-middle">Blue</option>
          <option value="dress-middle">Dress</option>
          <option value="pink-middle">Pink</option>
          <option value="red-middle">Red</option>
        </select>
      </div>
      <div className="form-control">
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="blue-pants">Blue Pants</option>
          <option value="dog-pants">Dog Pants</option>
          <option value="leg-pants">Leg Pants</option>
          <option value="white-pants">White Pants</option>
        </select>
      </div>
    </div>
  );
}
