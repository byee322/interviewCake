/*

Let's pair code a program that can do scoring for a game: 
The game has exactly 2 players. 
Each player scores 1pt at a time. 
Each player starts with 0 points. 
The player with a score >= 4 wins but they must win by 2 pts.
4 to 2 wins
4 to 3 does not win
5 to 3 wins
If the score is tied at or above 3, we change both scores to 3 and keep going until one player wins by 2
We should be able to:
(1) Write a function that returns the current score
(2) Write a function that increments the score of a given player, error if the game is already over
(3) Write a function that returns which player won or an error when the game is not over yet.

*/

/*

Congrats, you basically implemented the scoring mechanism for Tennis! 
In our modified tennis game sets are made up of games.
A set is a group of 5 games.
A player wins a set if they win 3 games. 
After a game is done, the same two players play another game until the set is over. 
Let's implement sets now.

*/

/// game class 
/// player 1 
/// player 2 
/// score for player 1 
// score player 2 

// score method -- increment by 1
// error if game is over 

// checkFor winner ? 
// or error when the game if the game isn't over 

class RedditGame {
    constructor(){
        this.player1 = {}
        this.player2 = {}
        this.player1Score = 0
        this.player2Score = 0
        this.winner = null
    }
    
    currentScore(){
        return `Player1 : ${this.player1Score}, Player2: ${this.player2Score}`
    }
    
    score(playerNumber){        
        if(!this.checkForWin()){
            if(playerNumber == 1){
                this.player1Score += 1
            }else {
                this.player2Score += 1
            }
        }else{
            return "error game is over!"
        }
        
        this.checkForTie()
        
        return "scored!"
    }
    
    checkForTie(){
        if(this.player1Score >= 3 && this.player1Score == this.player2Score && this.player2Score >= 3){
            this.player1Score = 3
            this.player2Score = 3
        }
    }
    
    checkForWin(){
        let isWinner = false
        
        if(this.player2Score - this.player1Score > 1 && this.player2Score > 3){
            console.log("Player 2 wins!")
            this.winner = 2
            isWinner = true
        }
        
        
        if(this.player1Score - this.player2Score > 1 && this.player1Score > 3){
            console.log("Player 1 wins!")
            this.winner = 1
            isWinner = true
        }
        
        return isWinner
    }
}

class SetClass {
    constructor(game){
        this.player1Wins = 0
        this.player2Wins = 0
        this.games = [new RedditGame(), new RedditGame(), new RedditGame(),  new RedditGame(),  new RedditGame()]
    }
    
    
    
    checkForWonSet(){
        let firstTo3 = null
        
        this.games.forEach(game => {
            if(this.player1Wins == 3){
                firstTo3 = 1
                break
            }
            
            if(this.player2Wins == 3){
                firstTo3 = 2
                break
            }
            
            if(game.winner == 1){
                this.player1Wins += 1
            }
            
            if(game.winner == 2){
                this.player2Wins += 1
            }
        })
        
        return firstTo3
    }
    
}

const game = new RedditGame()
console.log("current score:", game.currentScore())
console.log("score player 1:", game.score(1))
console.log("current score:", game.currentScore())

console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())
 
console.log("score player 1:", game.score(1))
console.log("current score:", game.currentScore())
 
console.log("score player 1:", game.score(1))
console.log("current score:", game.currentScore())

console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())
 
 console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())

console.log("score player 1:", game.score(1))
console.log("current score:", game.currentScore())

console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())

console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())

console.log("score player 2:", game.score(2))
console.log("current score:", game.currentScore())

console.log("check for win:", game.checkForWin())
