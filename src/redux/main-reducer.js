import {calculateWinner} from "../utility/objects-helpers";
import {
    CLICK_ON_CELL, CLOSE_POP_UP, CONTINUE_GAME, EXIT_THE_GAME,
    GAME_WITH_COMPUTER, MOVE_PLAYER, onMovePlayer,
    SET_NAMES_GAMES, SET_TOTAL_SCORE, SET_WINNER, setTotalScore, setWinner, START_GAME,
    START_GAME_WITH_COMPUTER, startGameWithComputer
} from "./actions";

const initialState = {
    squares: [
        {id: 1, value: null}, {id: 2, value: null}, {id: 3, value: null},
        {id: 4, value: null}, {id: 5, value: null}, {id: 6, value: null},
        {id: 7, value: null}, {id: 8, value: null}, {id: 9, value: null},
    ],
    games: [
        {id: 1, winnerPointsGamer1: 0, winnerPointsGamer2: 0},
        {id: 2, winnerPointsGamer1: 0, winnerPointsGamer2: 0},
        {id: 3, winnerPointsGamer1: 0, winnerPointsGamer2: 0},
        {id: 4, winnerPointsGamer1: 0, winnerPointsGamer2: 0},
        {id: 5, winnerPointsGamer1: 0, winnerPointsGamer2: 0},
    ],
    totalScore: {
        allPointsGamer1: 0,
        allPointsGamer2: 0,
    },
    xIsNext: true,
    isStartGame: false,
    isRoundStarted: false,
    gamer1: 'Gamer 1',
    gamer2: 'Gamer 2',
    isPopUpActive: false,
    isGameWithComputer: false,
    currentGame: 0,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        // клик по кнопке при игре с другом
        case CLICK_ON_CELL:
            let newSquares = state.squares.map(square => (square.id === action.id)
                ? {...square, value: state.xIsNext ?'X':'O'}: square);
            return {
                ...state,
                squares: newSquares,
                xIsNext: !state.xIsNext,
            };

            // нажали кнопку играть с другом
        case START_GAME:
            return {
                ...state,
                isStartGame: !state.isStartGame,//true
                isPopUpActive: !state.isPopUpActive,//true
                currentGame: state.currentGame + 1,//1,2,3,4,5// max5
                isRoundStarted: true,//раунд начался !state.isRoundStarted
            };

            //ход игрока при игре с компьютером
        case MOVE_PLAYER:
            let newArray = state.squares.map(s => (s.id === action.id) ? {...s, value: 'X'} : s);
            return {
                ...state,
                xIsNext: !state.xIsNext,
                squares: newArray
            };

            ///нажали кнопку играть с компьютером
        case GAME_WITH_COMPUTER:
            return {
                ...state,
                isStartGame: !state.isStartGame,//true
                gamer2: 'COMPUTER',
                isGameWithComputer: !state.isGameWithComputer,//true
                currentGame: state.currentGame + 1,
                isRoundStarted: true,
            };

            // ход компьютера при игре с компьютером
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

            // закрываем всплывающее окно
        case CLOSE_POP_UP:
            return {...state, isPopUpActive: !state.isPopUpActive};

            //выходим из текущего режима(с компьютером или с другом) игры
        case EXIT_THE_GAME:
            let newSquaresAfterExit = state.squares.map(square => {
                return {
                    ...square,
                    value: null,
                }
            });
            let newGames = state.games.map(games => {
                return {
                    ...games,
                    winnerPointsGamer1: 0,
                    winnerPointsGamer2: 0,
                }
            });
            let newTableScore = {
                allPointsGamer1: 0,
                allPointsGamer2: 0,
            };
            return {
                ...state,
                squares: newSquaresAfterExit,
                games: newGames,
                totalScore: newTableScore,
                xIsNext: true,
                isStartGame: false,
                gamer1: 'Gamer 1',
                gamer2: 'Gamer 2',
                isPopUpActive: false,
                isGameWithComputer: false,
                currentGame: 0,
                isRoundStarted: false,
            };

            //продолжаем игру(увеличиваем раунд) в выбранном режиме
        case CONTINUE_GAME:
            let newSquaresAfterContinue = state.squares.map(square => {
                return {
                    ...square,
                    value: null,
                }
            });
            return {
                ...state,
                squares: newSquaresAfterContinue,
                currentGame: state.currentGame + 1,
                xIsNext: true,
                isRoundStarted: true,
            };

            //сетаем имена игроков в стейт
        case SET_NAMES_GAMES:
            return {
                ...state,
                gamer1: action.name1 !== '' ? action.name1 : state.gamer1,
                gamer2: action.name2 !== '' ? action.name2 : state.gamer2,
            };

            //находим победителя и сетаем его очки в таблицу
        case SET_WINNER:
            let newGamesArray = state.games.map((g) => {
                if(state.currentGame === g.id && action.winner === 'DRAW'){
                    return {
                        id: g.id,
                        winnerPointsGamer1: 0,
                        winnerPointsGamer2: 0,
                    }
                } else if(state.currentGame === g.id){
                    return {
                        id: g.id,
                        winnerPointsGamer1: action.winner === 'X' ? 1 : 0,
                        winnerPointsGamer2: action.winner === 'O' ? 1 : 0,
                    }
                } else{
                    return g;
                }
            });
            return {
                ...state,
                games: newGamesArray,
            };

            //подсчитываем итоговые очки и заносим в стейт
        case SET_TOTAL_SCORE:
            let newTotalScore = {
                allPointsGamer1: state.games.map(g => g.winnerPointsGamer1).reduce((sum, current)=>
                {return sum + current},0),// [0,0,0,0,0]
                allPointsGamer2: state.games.map(g => g.winnerPointsGamer2).reduce((sum, current)=>
                {return sum + current},0),// [0,0,0,0,0]
            };
            return {
                ...state,
                totalScore: newTotalScore,
                isRoundStarted: false,
            };
        default:
            return state;
    }
};

export const startGameWithComputerTC = (id) => async (dispatch, getState) => {
    await dispatch(onMovePlayer(id));
    let winner = await calculateWinner(getState().main.squares);
    if (!winner) {
        setTimeout(() => {
            dispatch(startGameWithComputer());
        }, 2000);
    } else {
        dispatch(setWinner(winner))
    }
};

export const setWinnerTC = (winner) => async (dispatch) => {
    await dispatch(setWinner(winner));
    dispatch(setTotalScore())
};

export default mainReducer;