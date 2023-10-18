import React, { useState } from 'react';

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const changeTextHandler = () => {
    setTextChanged(true);
  };

  return (
    <div>
      <h1>Hello world!!!</h1>

      {!textChanged && <p>It's good to see you.</p>}
      {textChanged && <p>Changed!</p>}

      <button onClick={changeTextHandler}>Changed text</button>
    </div>
  );
};

export default Greeting;
