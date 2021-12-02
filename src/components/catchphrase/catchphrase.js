import React from 'react';

export default function Catchphrase({ phrase, setPhrase }) {
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input
          type="text"
          style={{ height: '250px' }}
          value={phrase}
          onInput={(e) => {
            setPhrase(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
