import React from 'react';
import Preview from '../preview/preview';
import './main.css';

export default function Main(head, middle, bottom, phrase) {
  return (
    <main>
      <Preview {...{ head, middle, bottom, phrase }} />
    </main>
  );
}
