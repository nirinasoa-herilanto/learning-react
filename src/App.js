import React, { useState, useCallback } from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHanlder = () => setAllowToggle(true);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHanlder}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraphs</Button>
    </div>
  );
}

export default App;
