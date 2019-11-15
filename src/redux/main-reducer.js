import repository from "../repository/repository";
import {calculateWinner} from "../utility/objects-helpers";

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


const initialState = {
    squares: [
        {id: 1, value: null}, {id: 2, value: null}, {id: 3, value: null},
        {id: 4, value: null}, {id: 5, value: null}, {id: 6, value: null},
        {id: 7, value: null}, {id: 8, value: null}, {id: 9, value: null},
    ],
    games: [
        {id: 1, count: 1}
    ],
    xIsNext: true,
    isStartGame: false,
    gamer1: 'Gamer 1',
    gamer2: 'Gamer 2',
    isPopUpActive: false,
    isGameWithComputer: false,
};

// export const setNamesGamesTC = (name1, name2) => async (dispatch) => {
//     await repository.saveUsersNames(name1, name2);
//     dispatch(setNamesGames(name1, name2))
// };

export const startGameWithComputerTC = (id) => async (dispatch, getState) => {
    debugger
    await  dispatch(onMovePlayer(id));
    let winner = await calculateWinner(getState().main.squares);
    if(!winner){
        setTimeout(() => {
            dispatch(startGameWithComputer())
        },2000)
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ON_CELL:
            let newSquares = state.squares.map(square => (square.id === action.id)
                ? {...square, value: state.xIsNext ? 'X' : 'O'} : square);
            return {
                ...state,
                squares: newSquares,
                xIsNext: !state.xIsNext,
            };
        case START_GAME:
            return {
                ...state,
                isStartGame: !state.isStartGame,
                isPopUpActive: !state.isPopUpActive,
            };
        case MOVE_PLAYER:
            let newArray = state.squares.map(s => (s.id === action.id) ? {...s, value: 'X'} : s);
            return {
                ...state,
                xIsNext: !state.xIsNext,
                squares: newArray
            };
        case GAME_WITH_COMPUTER:
            return {
                ...state,
                isStartGame: !state.isStartGame,
                gamer2: 'COMPUTER',
                isGameWithComputer: !state.isGameWithComputer,
            };
        case START_GAME_WITH_COMPUTER:
            let findId = () => {
                let i = 1;
                let conditionTrue;
                while (!conditionTrue) {
                    let random = Math.floor(Math.random() * 9) + 1;
                    conditionTrue = state.squares.some((element) => element.id === random && element.value === null);
                    if (conditionTrue) {
                        return random
                    } else {
                        i++;
                    }
                }
            };
            let findNewElId = findId();
            let newSquaresGame = state.squares.map(square =>
                square.id === findNewElId ? {...square, value: 'O'} : square);
            return {
                ...state,
                squares: newSquaresGame,
                xIsNext: !state.xIsNext,
            };
        case STOP_COMPUTER_MOVE:
            // const fullness = state.squares.filter(sq => sq.value === null).length;
            return {
                ...state,

            }
        case CLOSE_POP_UP:
            return {...state, isPopUpActive: !state.isPopUpActive};
        case EXIT_THE_GAME:
            let newSquaresAfterExit = state.squares.map(square => {
                return {
                    ...square,
                    value: null,
                }
            });
            return {
                ...state,
                squares: newSquaresAfterExit,
                xIsNext: true,
                isStartGame: false,
                gamer1: 'Gamer 1',
                gamer2: 'Gamer 2',
                isPopUpActive: false,
                isGameWithComputer: false,
            };
        case CONTINUE_GAME:
            return {
                ...state,
            };
        case SET_NAMES_GAMES:
            return {
                ...state,
                gamer1: action.name1 !== '' ? action.name1 : state.gamer1,
                gamer2: action.name2 !== '' ? action.name2 : state.gamer2,
            };
        default:
            return state;
    }
};

export const clickOnCell = (id) => ({type: CLICK_ON_CELL, id});
export const startGame = () => ({type: START_GAME});
export const closePopUp = () => ({type: CLOSE_POP_UP});
export const exitTheGame = () => ({type: EXIT_THE_GAME});
export const continueGame = () => ({type: CONTINUE_GAME});
export const gameWithComputer = () => ({type: GAME_WITH_COMPUTER});
export const setNamesGamesTC = (name1, name2) => ({type: SET_NAMES_GAMES, name1, name2});
export const startGameWithComputer = () => ({type: START_GAME_WITH_COMPUTER});
export const onMovePlayer = (id) => ({type: MOVE_PLAYER, id});
// export const stopComputerMove = () => ({type: STOP_COMPUTER_MOVE});

export default mainReducer;