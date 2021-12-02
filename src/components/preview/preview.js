import React from 'react';
import Character from '../character/character';
import Catchphrase from '../catchphrase/catchphrase';
import { useState } from 'react';
import './preview.css';

export default function Preview() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  return (
    <div>
      <Character
        {...{
          head,
          setHead,
          headCount,
          setHeadCount,
          middle,
          setMiddle,
          middleCount,
          setMiddleCount,
          bottom,
          setBottom,
          bottomCount,
          setBottomCount,
        }}
      />

      <Catchphrase
        {...{
          phrase,
          setPhrase,
          phraseList,
          setPhraseList,
        }}
      />

      <div className="parts">
        <img alt={head} src={`${process.env.PUBLIC_URL}/assets/${head}.png`} />
        <img alt={middle} src={`${process.env.PUBLIC_URL}/assets/${middle}.png`} />
        <img alt={bottom} src={`${process.env.PUBLIC_URL}/assets/${bottom}.png`} />
      </div>

      {!!headCount && <p>You changed the head {headCount} times</p>}
      {!!middleCount && <p>You have changed the middle {middleCount} times. </p>}
      {!!bottomCount && <p>You have changed the bottom {bottomCount} times. </p>}

      {!!phraseList.length && (
        <div className="phrase-list">
          You have called your character:
          {phraseList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </div>
  );
}
