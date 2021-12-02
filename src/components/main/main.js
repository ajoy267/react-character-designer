import React from 'react';
import Preview from '../preview/preview';
import background from '../../bg.jpeg';

export default function Main(head, middle, bottom, phrase) {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      <Preview {...{ head, middle, bottom, phrase }} />
    </main>
  );
}
