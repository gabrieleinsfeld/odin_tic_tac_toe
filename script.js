

function createBoard(){
    const container = document.getElementById("container")
    const board = {"0": "", "1": "", "2": "", "3": "","4": "", "5": "", "6": "", "7": "", "8": ""}
    for (let index in board) {
        const element = board[index];
        const cell = document.createElement("div")
        cell.setAttribute("id", `cell${index}`)
        cell.setAttribute('class', 'cell')
        cell.textContent = element
        container.appendChild(cell)
    }
    return board
}

function setPlayer(currentPlayer=""){
    let player = ""
    if(currentPlayer != ""){
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

function isGameOver(){

}

function isMoveLegal(){

}

function init(){
    
}

createBoard()