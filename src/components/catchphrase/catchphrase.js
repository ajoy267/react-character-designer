import React from 'react';
import './catchphrase.css';

export default function Catchphrase({ phrase, setPhrase, setPhraseList }) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };
  return (
    <div className="catchphrase">
      <div className="form-control">
        <p>Add A Catch Phrase</p>
        <input
          type="text"
          style={{ height: '25px' }}
          value={phrase}
          onChange={(e) => {
            setPhrase(e.target.value);
          }}
        />
      </div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
