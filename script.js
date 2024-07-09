
curPlayer = ""

function createBoard(board){
    const container = document.getElementById("container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let index in board) {
        const element = board[index];
        const cell = document.createElement("div")
        cell.setAttribute("id", `cell${index}`)
        cell.setAttribute('class', 'cell')
        cell.addEventListener("click", ()=>{
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


function gameOver(){
    const gameOverDisplay = document.getElementById("game_over")
    gameOverDisplay.style.display = "flex"
    const restartBtn = document.getElementById("restart")
    restartBtn.addEventListener("click", ()=>{
        gameOverDisplay.style.display = "none"
        init()
    })
}


function isGameOver(board){
    for (let index = 0; index < 9; index+=3) {
        if(board[index.toString()] == board[(index+1).toString()] && board[index.toString()] == board[(index+2).toString()]){
            if (board[index.toString()] != ""){
                return true
            }
        }
        
    }
    for (let index = 0; index < 3; index+=1) {
        if(board[index.toString()] == board[(index+3).toString()] && board[index.toString()] == board[(index+6).toString()]){
            if (board[index.toString()] != ""){
                return true
            }
        }
        
    }
    if(board["0"] == board["4"] && board["0"] == board["8"]){
        if (board["0"] != ""){
            return true
        }
    }else if(board["2"] == board["4"] && board["2"] == board["6"]){
        if (board["2"] != ""){
            return true
        }
    }

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
