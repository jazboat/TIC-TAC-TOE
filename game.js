var restartBtn = document.querySelector('.restart-btn');
var playerX = document.querySelector('.player-x');
var playerO = document.querySelector('.player-o');


var allBoxes = document.querySelectorAll('.box');

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

    var s0 = document.querySelector('.top-left').textContent;
    var s1 = document.querySelector('.top').textContent;
    var s2 = document.querySelector('.top-right').textContent;
    var s3 = document.querySelector('.middle-left').textContent;
    var s4 = document.querySelector('.middle').textContent;
    var s5 = document.querySelector('.middle-right').textContent;
    var s6 = document.querySelector('.bottom-left').textContent;
    var s7 = document.querySelector('.bottom').textContent;
    var s8 = document.querySelector('.bottom-right').textContent;


    if (s0 === 'X' && s1 === 'X' && s2 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[1].classList.add('blink');
        allBoxes[2].classList.add('blink');
    } else if (s3 === 'X' && s4 === 'X' && s5 === 'X') {
        allBoxes[3].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[5].classList.add('blink');
    } else if (s6 === 'X' && s7 === 'X' && s8 === 'X') {
        allBoxes[6].classList.add('blink');
        allBoxes[7].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s0 === 'X' && s3 === 'X' && s6 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[3].classList.add('blink');
        allBoxes[6].classList.add('blink');
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
    } else if (s0 === 'X' && s4 === 'X' && s8 === 'X') {
        allBoxes[0].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[8].classList.add('blink');
///////////////////////////////////////////////////////////////////
// START THE 0

    } else 
    if (s0 === 'O' && s1 === 'O' && s2 === 'O'){
        allBoxes[0].classList.add('blink');
        allBoxes[1].classList.add('blink');
        allBoxes[2].classList.add('blink');
    } else if (s3 === 'O' && s4 === 'O' && s5 === 'O') {
        allBoxes[3].classList.add('blink');
        allBoxes[4].classList.add('blink');
        allBoxes[5].classList.add('blink');
    } else if (s6 === 'O' && s7 === 'O' && s8 === 'O') {
        allBoxes[6].classList.add('blink');
        allBoxes[7].classList.add('blink');
        allBoxes[8].classList.add('blink');
    } else if (s0 === 'O' && s3 === 'O' && s6 === 'O') {
        allBoxes[0].classList.add('blink');
        allBoxes[3].classList.add('blink');
        allBoxes[6].classList.add('blink');
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
    } else if (s0 === 'O' && s4 === 'O' && s8 === 'O') {
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
