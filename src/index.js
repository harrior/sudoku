function getEmptyPlaces(matrix) {
    let empties = []
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0)
                empties.push([i, j])
        }
    return empties
}

function findPossibleValues(matrix, i, j) {
    let possibles = [false, true, true, true, true, true, true, true, true, true]

    for (let col = 0; col < matrix.length; col++) {
        possibles[matrix[i][col]] = false;
    }
    for (let row = 0; row < matrix.length; row++) {
        possibles[matrix[row][j]] = false;
    }

    for (let row = Math.floor(i / 3) * 3; row < Math.floor(i / 3) * 3 + 3; row++) {
        for (let col = Math.floor(j / 3) * 3; col < Math.floor(j / 3) * 3 + 3; col++) {
            possibles[matrix[row][col]] = false;
        }
    }
        let values = [];
        for (let i in possibles) {
            if (possibles[i])
                values.push(i)
        }

        return [[i,j], values];
    }

    module.exports = function solveSudoku(matrix) {
        let empties = getEmptyPlaces(matrix);
        console.log(getEmptyPlaces(matrix))
        for (let place of empties) {
            console.log(findPossibleValues(matrix, place[0], place[1]))
        }

        console.log('--------------------------------------')
    }

    const matrix = [
        [5, 3, 4, 6, 7, 8, 9, 0, 0],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]

function SolveALL(matrix){
    if (getEmptyPlaces(matrix) && checkSolve(matrix))
        return matrix
    else {

    }
}