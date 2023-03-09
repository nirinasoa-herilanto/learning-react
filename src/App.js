import './App.css';
import React from 'react';

function App() {
  React.useEffect(() => {
    document.title = 'Welcome to the app';
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <h1 className="title">Welcome to my project</h1>
        <p>
          An application about learning and deep dive into React.JS framework
        </p>
      </div>
    </div>
  );
}

export default App;
