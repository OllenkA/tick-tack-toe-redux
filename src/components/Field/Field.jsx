import React from 'react';
import '../../App.css';
import PopUp from "../PopUp/PopUp";


const Field = (props) => {
    return <article className="field">
        {props.isPopUpActive ?
            <PopUp closePopUp={props.closePopUp} setNamesGamesTC={props.setNamesGamesTC}/>
                   : null}
        <aside className="cells">{props.cells}</aside>
    </article>
};

export default Field;