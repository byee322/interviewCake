// Remember that famous Windows game Minesweeper? We’d like you to implement a portion of the game logic to showcase your algorithm and programming skills.

// Rules Summary
// The player is presented with a grid of squares. Some of the squares, unknown to the player, contain mines.

// Each square contains either a mine (indicated below as a *), or an empty square. Empty squares have a number of mines in the adjacent squares. Empty squares can have counts from 0 (no adjacent mines) up to 8 (all adjacent squares are mines).

// If you were to reveal a complete grid, for example, you can see which squares have mines and which squares are empty:

// 0  0  0  0  0
// 0  0  0  0  0
// 1  1  1  0  0
// 1  *  1  0  0
// 1  2  2  1  0
// 0  1  *  2  1
// 0  1  1  2  *
// Coding Prompt
// We would like you to work through the following steps:

// Define the data model to represent the board.
// Implement the logic of setting up the board for play. The input to create a board is:
// The width of the board
// The height of the board
// The number of mines to be randomly placed on the board
// For debugging purposes, write a function that prints out the board, showing each cell as a number (0-8) or mine (*).
// There’s no need for a GUI or a functioning game. You can use any programming language of your choice.



/// board 
/// setup 
/// print board with mines 



class Minesweeper {
  constructor(width, height, mineCount){
    this.board = []
    this.mines = []
    this.board = this.createBoard(width, height, mineCount)
  }

  printBoard() {
    console.log(this.board)
  }

  createBoard(width, height, mineCount){
    if(this.checkMineCount(width, height, mineCount)){
      const mineCoordinates = this.generateMinePoints(width, height, mineCount)
      for(let i=0; i < width; i++){
        let newRow = new Array(height).fill(0)
        this.board.push(newRow)
      }
    }

    /// 
    this.inputMines()
    console.log(this.board)
  }

  inputMines(){
    for(let i=0; i < width; i ++){
      for(let j=0; j < height; j++){
        
      }
    }
  }

  checkMineCount(width, height, mineCount){
    const validBoardSpots = ((width * height) - 1)
    console.log("validBoardSpots:", validBoardSpots)
    if(validBoardSpots < mineCount){
      throw Error("invalid mine count")
    }

    return true
  }

  generateMinePoints(width, height, mineCount){
    let coordinates = []
    let validMineSpots = {}

    for(let i =0; i < mineCount; i++){
      let mineSpot = [this.genRandomInt(0, width), this.genRandomInt(0, height)]

      if(!validMineSpots[`${mineSpot[0]}-${mineSpot[1]}`]){
        coordinates.push(mineSpot)
        validMineSpots[`${mineSpot[0]}-${mineSpot[1]}`] = mineSpot
      }else {
        while(coordinates.length !== i){
          let mineSpot = [this.genRandomInt(0, width), this.genRandomInt(0, height)]
          if(!validMineSpots[`${mineSpot[0]}-${mineSpot[1]}`]){
            coordinates.push(mineSpot)
            validMineSpots[`${mineSpot[0]}-${mineSpot[1]}`] = mineSpot
            break
          }
        }
      }
    }

    this.mines = validMineSpots
  }



  genRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
} 

const game = new Minesweeper(2, 3, 1)
console.log(game)
