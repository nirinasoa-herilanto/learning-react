import React, { useState } from 'react';

import Output from './Output';

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const changeTextHandler = () => {
    setTextChanged(true);
  };

  return (
    <div>
      <h1>Hello world!!!</h1>

      {!textChanged && <Output>It's good to see you.</Output>}
      {textChanged && <Output>Changed!</Output>}

      <button onClick={changeTextHandler}>Changed text</button>
    </div>
  );
};

export default Greeting;
