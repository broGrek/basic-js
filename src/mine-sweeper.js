const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = matrix.map(row => row.map(cell => 0));
  function increment(row, col) {
    for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rows - 1); i++) {
      for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, cols - 1); j++) {
        if (!(i === row && j === col)) {
          result[i][j]++;
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        increment(i, j);
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
