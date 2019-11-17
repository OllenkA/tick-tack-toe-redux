import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import FieldContainer from "./containers/FieldContainer";
import ResultTableContainer from "./containers/ResultTableContainer";


function App() {
  return (
    <div className="App">
          <Header/>
          <FieldContainer/>
          <ResultTableContainer/>
    </div>
  );
}

export default App;
