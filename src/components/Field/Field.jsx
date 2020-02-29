import React from 'react';
import '../../App.css';
import PopUp from "../PopUp/PopUp";
import PopUpEndOfTheGame from "../PopUpEndOfTheGame/PopUpEndOfTheGame";


const Field = ({
                   isPopUpEndActive, currentGame,
                   closePopUpEndOfTheGameTC, closePopUp,
                   isPopUpActive, gamer1, gamer2,
                   setNamesGamesTC, cells, totalScore,
               }) => {

    return <article className="field">
        {!isPopUpEndActive && currentGame === 2 && <PopUpEndOfTheGame
            closePopUpEndOfTheGameTC={closePopUpEndOfTheGameTC}
            totalScore={totalScore} gamer1={gamer1} gamer2={gamer2}
        />}
        {isPopUpActive &&
        <PopUp
            closePopUp={closePopUp}
            setNamesGamesTC={setNamesGamesTC}/>}
        <aside className="cells">
            {cells}
        </aside>
    </article>
};

export default Field;