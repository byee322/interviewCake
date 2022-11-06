class SnakeGame {
  constructor(width, height, food){
    this.snakeLocation = [[0,0]],
    this.width = width,
    this.height = height,
    this.score = 0,
    this.food = food
  }

  move(direction){
    const location = this.snakeLocation.slice().shift()
    let snakeColumn = location[0]
    let snakeRow = location[1]

    if(direction == "R"){
      snakeColumn += 1
    }else if(direction == "L"){
      snakeColumn -= 1
    }else if(direction == "U"){
      snakeRow -= 1
    }else if(direction == "D"){
      snakeRow += 1
    }

    const newLocation = [snakeColumn, snakeRow]
    const firstFood = this.food.slice().shift()

    if(newLocation[0] === firstFood[0] && newLocation[1] === firstFood[1]){
      this.snakeLocation.unshift(newLocation)
      this.food.shift()
      this.score += 1
      return this.score
    }

    if(snakeRow > this.height || snakeColumn > this.width){
      return -1
    }else {
      this.snakeLocation.shift()
      this.snakeLocation.push(newLocation)
      return 0
    }
  }
}

const snakeGame = new SnakeGame(3, 2, [[1,2], [0,1]])
console.log(snakeGame.move("R"))  // return 0
console.log(snakeGame.move("D"))  // return 0
console.log(snakeGame.move("D"))  // return 1
console.log(snakeGame.move("U"))  // return 0
console.log(snakeGame.move("L"))  // return 2
