const topLeftSqu = document.querySelector('.top-left');
const topSqu = document.querySelector('.top');
const topRightSqu = document.querySelector('.top-right');
const middleLeftSqu = document.querySelector('.middle-left');
const middleSqu = document.querySelector('.middle');
const middleRightSqu = document.querySelector('.top-left');
const bottomLeftSqu = document.querySelector('.bottom-left');
const bottomSqu = document.querySelector('.bottom');
const bottomRightSqu = document.querySelector('.bottom-left');
const gameDisplay = document.querySelector('.game-status');
const restartBtn = document.querySelector('.restart-btn');
var playerXStatus = document.querySelector('.X');
var playerOStatus = document.querySelector('.O');


const allBoxes = document.querySelectorAll('.board-game div');

var currentPlayer = 'X'
var numberMoves = 0
var playerOStatus = 0
var playerXStatus = 0


function handleClick(event) {
    var item = event.target;
    item.textContent = currentPlayer;
    item.classList.add(currentPlayer);
    if (item.classList.contains(currentPlayer)); 

    numberMoves ++ 

    var s0 = topLeftSqu.textContent;
    var s1 = topSqu.textContent;
    var s2 = topRightSqu.textContent;
    var s3 = middleLeftSqu.textContent;
    var s4 = middleSqu.textContent;
    var s5 = middleRightSqu.textContent;
    var s6 = bottomLeftSqu.textContent;
    var s7 = bottomSqu.textContent;
    var s8 = bottomRightSqu.textContent;
    
    var i = playerXStatus

    if (s0 === 'X' && s1 === 'X' && s2 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[1].classList.add('blink');
        allBoxes[2].classList.add('blink');
    } else if (s0 === 'X' && s3 === 'X' && s6 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[3].classList.add('blink');
        allBoxes[6].classList.add('blink');
    } else if (s0 === 'X' && s4 === 'X' && s8 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s1 === 'X' && s4 === 'X' && s7 === 'X') {
        allBoxes[1].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[7].classList.add('blink');
    } else if (s2 === 'X' && s5 === 'X' && s8 === 'X') {
        allBoxes[2].classList.add('blink');
        allBoxes[5].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s2 === 'X' && s4 === 'X' && s6 === 'X') {
        allBoxes[2].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[6].classList.add('blink');
    } else if (s3 === 'X' && s4 === 'X' && s5 === 'X') {
        allBoxes[3].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[5].classList.add('blink');
    } else if (s6 === 'X' && s7 === 'X' && s8 === 'X') {
        allBoxes[6].classList.add('blink');
        allBoxes[7].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else 
    if (s0 === 'O' && s1 === 'O' && s2 === 'O'){
        allBoxes[0].classList.add('blink');
        allBoxes[1].classList.add('blink');
        allBoxes[2].classList.add('blink');
    } else if (s0 === 'O' && s3 === 'O' && s6 === 'O') {
        allBoxes[0].classList.add('blink');
        allBoxes[3].classList.add('blink');
        allBoxes[6].classList.add('blink');
    } else if (s0 === 'O' && s4 === 'O' && s8 === 'O') {
        allBoxes[0].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s1 === 'O' && s4 === 'O' && s7 === 'O') {
        allBoxes[1].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[7].classList.add('blink');
    } else if (s2 === 'O' && s5 === 'O' && s8 === 'O') {
        allBoxes[2].classList.add('blink');
        allBoxes[5].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s2 === 'O' && s4 === 'O' && s6 === 'O') {
        allBoxes[2].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[6].classList.add('blink');
    } else if (s3 === 'O' && s4 === 'O' && s5 === 'O') {
        allBoxes[3].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[5].classList.add('blink');
    } else if (s8 === 'O' && s7 === 'O' && s6 === 'O') {
        allBoxes[8].classList.add('blink');
        allBoxes[7].classList.add('blink');
        allBoxes[6].classList.add('blink');
    } else {
        if (numberMoves === 9) {
            for (let i =0; i < allBoxes.length; i++) {
                allBoxes[i].classList.add('blink');
            }
        } 
    }

    // switch player

    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X' 
    }
}

function restartHanlde() {
    for (let i =0; i < allBoxes.length; i++) {
        allBoxes[i].textContent = "";
        allBoxes[i].classList.remove('blink')
    }

}


restartBtn.addEventListener('click', restartHanlde);
for (let i =0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', handleClick)
}