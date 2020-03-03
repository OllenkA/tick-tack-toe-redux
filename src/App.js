import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import FieldContainer from "./containers/FieldContainer";
import ResultTableContainer from "./containers/ResultTableContainer";
import ButtonsContainer from "./containers/ButtonsContainer";


function App() {
    return (
        <article className="App">
            <section className='wrapperApp'>
                <section className='wrapperHeader'>
                    <Header/>
                    <ResultTableContainer/>
                </section>
                <section className='mainField'>
                    <FieldContainer/>
                    <ButtonsContainer/>
                </section>
            </section>
        </article>
    );
}

export default App;