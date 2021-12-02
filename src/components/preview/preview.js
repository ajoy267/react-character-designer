import React from 'react';

export default function Preview({ head, middle, bottom }) {
  return (
    <div className="character">
      <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
      <img alt={middle} src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
      <img alt={bottom} src={`${process.env.PUBLIC_URL}/assets/${bottom}.png`} />
    </div>
  );
}
