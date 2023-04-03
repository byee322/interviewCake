// class SnakeGame {
//   constructor(width, height, food){
//     this.snakeLocation = [[0,0]],
//     this.width = width,
//     this.height = height,
//     this.score = 0,
//     this.food = food
//   }

//   move(direction){
//     const location = this.snakeLocation.slice().shift()
//     let snakeColumn = location[0]
//     let snakeRow = location[1]

//     if(direction == "R"){
//       snakeColumn += 1
//     }else if(direction == "L"){
//       snakeColumn -= 1
//     }else if(direction == "U"){
//       snakeRow -= 1
//     }else if(direction == "D"){
//       snakeRow += 1
//     }

//     const newLocation = [snakeColumn, snakeRow]
//     const firstFood = this.food.slice().shift()

//     if(newLocation[0] === firstFood[0] && newLocation[1] === firstFood[1]){
//       this.snakeLocation.unshift(newLocation)
//       this.food.shift()
//       this.score += 1
//       return this.score
//     }

//     if(snakeRow > this.height || snakeColumn > this.width){
//       return -1
//     }else {
//       this.snakeLocation.shift()
//       this.snakeLocation.push(newLocation)
//       return 0
//     }
//   }
// }


// make a snake game
class SnakeGame {
  constructor(width, height, food){
    this.snakeLocation = [[0,0]]
    this.width = width
    this.height = height
    this.food = food
    this.score = 0
  }

  generateRandomLocationBetweenHeightWidth(){
    let max = Math.max(this.width, this.height)
    let min = 1
    let random = Math.floor(Math.random() * max + 1)
    return random
  }

  move(direction) {
    let location = this.snakeLocation.slice().shift()
    let row = location[0]
    let column = location[1]

    if(direction){
      if(direction == "R"){
        row += 1
      }
      if(direction == "L"){
        row -= 1
      }
      if(direction == "D"){
        column += 1
      }
      if(direction == "U"){
        column -= 1
      }
    }

    const firstFood = this.food.slice().shift()
    const newLocation = [row, column]
    if(newLocation[0] == firstFood[0] && newLocation[1] == firstFood[1]){
      this.score += 1
      this.snakeLocation.unshift(newLocation)
      this.food.shift()
      this.food.push([this.generateRandomLocationBetweenHeightWidth(), this.generateRandomLocationBetweenHeightWidth()])//generate new food function between heigh and width
      return this.score
    }

    if(row > this.width || column > this.height || row < 0 || column < 0){
      return -1
    }else{
      this.snakeLocation.shift()
      this.snakeLocation.push(newLocation)
      return 0
    }
  }
}



const snakeGame = new SnakeGame(4, 4, [[1,2], [0,1]])
console.log(snakeGame.move("R"))  // return 0
console.log(snakeGame.move("D"))  // return 0
console.log(snakeGame.move("D"))  // return 1
console.log(snakeGame.move("U"))  // return 0
console.log(snakeGame.move("L"))  // return 2
