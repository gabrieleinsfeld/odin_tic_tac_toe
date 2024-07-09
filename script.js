
curPlayer = ""

function createBoard(){
    const container = document.getElementById("container")
    const board = {"0": "", "1": "", "2": "", "3": "","4": "", "5": "", "6": "", "7": "", "8": ""}
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
                console.log("Game Over")
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


function makeMove(player){

}

function isGameOver(board){
    for (let index = 0; index < 9; index+=3) {
        if(board[index.toString()] == board[(index+1).toString()] && board[index.toString()] == board[(index+2).toString()]){
            if (board[index.toString()] != ""){
                return true
            }else{
                return false
            }
        }
        
    }
    for (let index = 0; index < 3; index+=1) {
        if(board[index.toString()] == board[(index+3).toString()] && board[index.toString()] == board[(index+6).toString()]){
            if (board[index.toString()] != ""){
                return true
            }else{
                return false
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
    }else{
        return false
    }
}

function isMoveLegal(board,index){
    if(board[index] == ""){
        return true
    }else{
        return false
    }

}

function init(){
    curPlayer = setPlayer()
    createBoard()
}

init()
