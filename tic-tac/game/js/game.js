let isgameover = false;
let isgamewin = false;
let isgamedraw = false;
let turn = '<img src="../img/x.png" alt="X">'

const changeTurn = () => {
    return turn === '<img src="../img/x.png" alt="X">' ? '<img src="../img/o.png" alt="O">' : '<img src="../img/x.png" alt="X">'
}

if (isgameover = false) {
    document.querySelector('.gamecont').style.display = "flex";
    document.querySelector('.playagain').style.display = "none";
}

const checkWin = () => {
    let text = document.getElementsByClassName('text');
    let draw = document.querySelectorAll(".text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((text[e[0]].innerHTML === text[e[1]].innerHTML) && (text[e[2]].innerHTML === text[e[1]].innerHTML) && (text[e[0]].innerHTML !== "")) {
            document.querySelector('.info-2').innerHTML = "Player &nbsp;" + text[e[0]].innerHTML + " &nbsp; Won";
            isgamewin = true;
            isgameover = true;
        } else if (draw[0].innerHTML !== "" && draw[1].innerHTML !== "" && draw[2].innerHTML !== "" && draw[3].innerHTML !== "" && draw[4].innerHTML !== "" && draw[5].innerHTML !== "" && draw[6].innerHTML !== "" && draw[7].innerHTML !== "" && draw[8].innerHTML !== "") {
            document.querySelector('.info-2').innerHTML = "Match Draw";
            isgamedraw = true;
            isgameover = true;
        }
        if (isgamewin == true && isgamedraw == true) {
            isgamewin = true;
            isgamedraw = false;
        }
    })
}

let dabas = document.getElementsByClassName("daba");
Array.from(dabas).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (text.innerHTML === '') {
            text.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.querySelector('.info').innerHTML = "Player &nbsp;" + turn + "'s &nbsp; Turn";
            } else {
                document.querySelector('.gamecont').style.display = "none";
                document.querySelector('.playagain').style.display = "flex";
            }
        }
    })
})

function playagain() {
    window.location.reload();
}