let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let ternO = true ;
let winnerName = document.querySelector("#winnername");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
]

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if (ternO) {
            box.innerText = "X";
            ternO = false;
        } else {
            box.innerText = "O";
            ternO = true;
        }
        box.disabled = true;

        checkWinner() ;
    });

});

const checkWinner = () => {
    for(patterns of winPatterns) {
        

    let pos1Val = boxes[patterns[0]].innerText
    let pos2Val = boxes[patterns[1]].innerText
    let pos3Val = boxes[patterns[2]].innerText

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            disableBoxes();
            winnerName.innerText = ` 👑 Winner is ${pos1Val} ✨✨ `
        }
    }

    }
}

resetbtn.addEventListener("click", () => {
    window.location.reload(); // Reloads the page
});