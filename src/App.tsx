import React from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Note id="a"></Note>
    </div>
  );
}

export default App;
