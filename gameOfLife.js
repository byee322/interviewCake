// const board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

const gameOfLife = (board) => {
    let x = 0,
        y = 0

    let newBoard = []

    const checkPlace = (y, x, horizantal, vertical) => {

      let newX = x + horizantal
      let newY = y + vertical
      if(newY > board.length - 1 || newY < 0){
        return 0
      }

      if(newX > board[0].length - 1 || newX < 0){
        return 0
      }

      return board[newY][newX]
    }

    for(let i=0; i < board.length; i++){
      let tempRow = []
      let boardRow = board[i]
      for(let j=0; j < boardRow.length; j++){

        let right = checkPlace(i, j, 1, 0)
        let left = checkPlace(i, j, -1, 0)
        let up = checkPlace(i, j, 0, -1)
        let down = checkPlace(i, j, 0, 1)
        let diagonalRightUp = checkPlace(i, j, 1, 1)
        let diagonalLeftUp = checkPlace(i, j, -1, 1)
        let diagonalRightDown = checkPlace(i, j, 1, -1)
        let diagonalLeftDown = checkPlace(i, j, -1, -1)

        let total = right + left + up + down + diagonalRightUp + diagonalLeftUp + diagonalRightDown + diagonalLeftDown

        if(boardRow[j] == 1 && total < 2){
          tempRow.push(0)
        }else if(boardRow[j] == 1 && total > 3){
          tempRow.push(0)
        }else if(boardRow[j] == 0 && total == 3){
          tempRow.push(1)
        }else if(boardRow[j] == 1 && (total == 2 || total == 3)){
          tempRow.push(1)
        }else{
          tempRow.push(boardRow[j])
        }
      }
      newBoard.push(tempRow)
    }

    return newBoard
}


console.log("gameOfLife: ", gameOfLife(board))
