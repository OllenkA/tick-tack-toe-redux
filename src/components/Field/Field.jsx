import React from 'react';
import '../../App.css';
import PopUp from "../PopUp/PopUp";
import PopUpEndOfTheGame from "../PopUpEndOfTheGame/PopUpEndOfTheGame";


const Field = ({
                   currentGame, exitTheGame, closePopUp, isPopUpActive, gamer1,
                   gamer2, setNamesGamesTC, cells, totalScore, isRoundStarted
               }) => {

    return <article>

        { currentGame === 5 && !isRoundStarted && <PopUpEndOfTheGame
            exitTheGame={exitTheGame}
            totalScore={totalScore}
            gamer1={gamer1} gamer2={gamer2}
        />}

        {isPopUpActive && <PopUp
            closePopUp={closePopUp}
            setNamesGamesTC={setNamesGamesTC}/>}

        <aside className="cells">
            {cells}
        </aside>

    </article>
};

export default Field;