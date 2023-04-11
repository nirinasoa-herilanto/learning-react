import React, { useState } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is a paragraphs</p>}
      <Button onClick={toggleParagraphHandler}>Toggle paragraphs</Button>
    </div>
  );
}

export default App;
