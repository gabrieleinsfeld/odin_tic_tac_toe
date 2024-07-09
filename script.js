
curPlayer = ""

function createBoard(board){
    const container = document.getElementById("container")

    // Erases current board if it exists
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // Add cells and event listeners for each  cell
    for (let index in board) {
        const element = board[index];
        const cell = document.createElement("div")
        cell.setAttribute("id", `cell${index}`)
        cell.setAttribute('class', 'cell')
        cell.addEventListener("click", ()=>{
            // Click checks if move is legal and if game is Over
            if(isMoveLegal(board, index)){
                board[index] = curPlayer
                cell.textContent = curPlayer
                curPlayer = setPlayer(curPlayer)
            }
            if(isGameOver(board)){
                gameOver()
            }
        })
        cell.textContent = element
        container.appendChild(cell)
    }
    return board
}



// Sets the player, at first is random
function setPlayer(currentPlayer=""){
    let player = ""
    if(currentPlayer == ""){
        const num = Math.random()*10
        if(num > 5){
            player = "X"
        }else{
            player = "O"
        }
    }else if(currentPlayer == "O"){
        player = "X"
    }else{
        player = "O"
    }
    return player
}


// Sets game over screen and add event listener to restart button
function gameOver(){
    const gameOverDisplay = document.getElementById("game_over")
    gameOverDisplay.style.display = "flex"
    const restartBtn = document.getElementById("restart")
    restartBtn.addEventListener("click", ()=>{
        gameOverDisplay.style.display = "none"
        init()
    })
}



// Loops through cells to see if game is over
function isGameOver(board){

    // Checks if rows are equal
    for (let index = 0; index < 9; index+=3) {
        if(board[index.toString()] == board[(index+1).toString()] && board[index.toString()] == board[(index+2).toString()]){
            if (board[index.toString()] != ""){
                return true
            }
        }
        
    }

    // Checks if columns are equal
    for (let index = 0; index < 3; index+=1) {
        if(board[index.toString()] == board[(index+3).toString()] && board[index.toString()] == board[(index+6).toString()]){
            if (board[index.toString()] != ""){
                return true
            }
        }
        
    }

    // Checks if diagonals are equal
    if(board["0"] == board["4"] && board["0"] == board["8"]){
        if (board["0"] != ""){
            return true
        }
    }else if(board["2"] == board["4"] && board["2"] == board["6"]){
        if (board["2"] != ""){
            return true
        }
    }

    // Cheks if all elements are different than ""
    if(Object.values(board).every(value => value !== "")){
        return true
    }
    return false
}



function isMoveLegal(board,index){
    if(board[index] == ""){
        return true
    }else{
        return false
    }

}

function init(){
    curPlayer = setPlayer("")
    const board = {"0": "", "1": "", "2": "", "3": "","4": "", "5": "", "6": "", "7": "", "8": ""}
    createBoard(board)
}

init()
