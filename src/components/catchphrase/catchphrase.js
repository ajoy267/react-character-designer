import React from 'react';

export default function Catchphrase({ setPhrase, phrase }) {
  const slogan = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <div className="catchphrase">
      <div className="form-control">
        <textarea style={{ height: '250px' }} value={phrase} onInput={slogan}></textarea>
      </div>
    </div>
  );
}
