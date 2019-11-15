export const calculateWinner = (squares) => {
    const lines = [
        // [1, 2, 3],
        // [4, 5, 6],
        // [7, 8, 9],
        // [1, 4, 7],
        // [2, 5, 8],
        // [3, 6, 9],
        // [1, 5, 9],
        // [3, 5, 7],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
            return squares[a].value;
        }
    }
    return null;
};

// export const stoppedGame = (squares, xIsNext, gamer1, gamer2) => {
//     const winner = calculateWinner(squares);
//     const fullness = squares.filter(sq => sq.value === null).length;
//     let status = '';
//     if (winner) {
//         status = 'Winner : ' + (winner.toUpperCase() === "X" ? gamer1 : gamer2);
//     } else if (!winner && fullness === 0) {
//         status = '0 : 0 --- DRAW'
//     } else {
//         status = 'Next move : ' + (xIsNext ? gamer1 : gamer2);
//     }
//
//     return status;
// };
// winner? status = 'Winner : ' + (winner.toUpperCase() === "X" ? gamer1 : gamer2):




