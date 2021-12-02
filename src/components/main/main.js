import React from 'react';
import { useState } from 'react';
import Character from '../character/character';

export default function Main() {
  const [head, setHead] = useState('head');
  const [middle, setMiddle] = useState('middle');
  const [bottom, setBottom] = useState('bottom');
  const [phrase, setPhrase] = useState('phrase');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  return (
    <main className="main">
      <Character {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
    </main>
  );
}
