import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import FieldContainer from "./containers/FieldContainer";
import ResultTable from "./components/ResultTable/ResultTable";


function App() {
  return (
    <div className="App">
          <Header/>
          <FieldContainer/>
          <ResultTable/>
          {/*<FooterContainer/>*/}
          {/*<Settings/>*/}
    </div>
  );
}

export default App;
