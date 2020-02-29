export const CLICK_ON_CELL = 'CLICK_ON_CELL';
export const START_GAME = 'START_GAME';
export const CLOSE_POP_UP = 'CLOSE_POP_UP';
export const EXIT_THE_GAME = 'EXIT_THE_GAME';
export const CONTINUE_GAME = 'CONTINUE_GAME';
export const GAME_WITH_COMPUTER = 'GAME_WITH_COMPUTER';
export const SET_NAMES_GAMES = 'SET_NAMES_GAMES';
export const START_GAME_WITH_COMPUTER = 'START_GAME_WITH_COMPUTER';
export const MOVE_PLAYER = 'MOVE_PLAYER';
export const STOP_COMPUTER_MOVE = 'STOP_COMPUTER_MOVE';
export const SET_WINNER = 'SET_WINNER';
export const CLOSE_POP_UP_END_OF_THE_GAME = 'CLOSE_POP_UP_END_OF_THE_GAME';

export const clickOnCell = (id) => ({type: CLICK_ON_CELL, id});
export const startGame = () => ({type: START_GAME});
export const closePopUp = () => ({type: CLOSE_POP_UP});
export const exitTheGame = () => ({type: EXIT_THE_GAME});
export const continueGame = () => ({type: CONTINUE_GAME});
export const gameWithComputer = () => ({type: GAME_WITH_COMPUTER});
export const setNamesGamesTC = (name1, name2) => ({type: SET_NAMES_GAMES, name1, name2});
export const startGameWithComputer = () => ({type: START_GAME_WITH_COMPUTER});
export const onMovePlayer = (id) => ({type: MOVE_PLAYER, id});
export const setWinner = (winner) => ({type: SET_WINNER, winner});
export const closePopUpEndOfTheGame = () => ({type: CLOSE_POP_UP_END_OF_THE_GAME});