var squareSize = 45;// chessboard square size
var startX = 20;    // chessboard start point
var startY = 10;    // chessboard start point
var x0;             // chessboard square start point
var y0;             // chessboard square start point
var chessboard = [];// chessboard squares
var chessboardSize; // chessboard size (8 squares)
//var minPixel0       // min size of viewport at reload

function divChessboard() {
    for (let index1 = 0; index1 < 8; index1++) {
        //chessboard.push([1, 6, 3, 4, 5, 6, 7, 8]);
        chessboard.push([]);
    }
    for (let index1 = 0; index1 < 8; index1++) {
        for (let index2 = 0; index2 < 8; index2++) {
            chessboard[index1][index2] = document.createElement("div");
        }
    }
}
divChessboard();

function getX0Y0(a, b) { // a, b: column, row number (1..8, 1..8) or (a..h, 1..8)
    x0 = startX + (a - 1) * squareSize; // square start point
    y0 = startY + (b - 1) * squareSize; // square start point
}

function myToString(n) {
    return n.toString() + "px";
}
function imagePlaceholder(divx1, imgFileName, sizeLeft, sizeTop, sizeWidth, sizeHeight, sizeIndex) {
    document.querySelector('body').appendChild(divx1);
    divx1.style.background = "url(" + imgFileName + ") center center no-repeat";
    divx1.style.backgroundSize = "contain";
    divx1.style.position = "absolute";
    divx1.style.left = myToString(sizeLeft);     // 522px
    divx1.style.top = myToString(sizeTop);       // 0px
    divx1.style.width = myToString(sizeWidth);   // 25px
    divx1.style.height = myToString(sizeHeight); // 25px
    divx1.style.zIndex = sizeIndex   // 2        
} // imagePlaceholder

var divx2 = document.createElement("div");
function drawSquare(a, b) { // a, b: columns, rows number (1..8, 1..8) or (a..h, 1..8)
    getX0Y0(a, b);
    let odd = a + b;
    let fName = '';
    if (odd % 2 != 0) {
        fName = "Chess_d45.svg";
    } else {
        fName = "Chess_l45.svg";
    }
    imagePlaceholder(chessboard[a - 1][b - 1], fName, x0, y0, squareSize, squareSize, "1");
}

function redraw() {
    for (let columns = 1; columns <= 8; columns++) {
        for (let rows = 1; rows <= 8; rows++) {
            drawSquare(columns, rows);
        }
    }
}

function setBackground() {
    var bg = document.querySelector('body');
    bg.style.background = "url(dark-queen.jpg)";
    //bg.style.background = "url(dark-queen_four.jpg)";

    //bg.style.backgroundSize = "contain";

    //let minPixel0 = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    //bg.style.height = myToString(Math.floor(minPixel0 / 1.1));
}

function getViewport() {
    let vWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let minPixel = Math.min(vWidth, vHeight);
    chessboardSize = minPixel * 0.7;
    squareSize = Math.floor(chessboardSize / 8);
    chessboardSize = squareSize * 8;
    startX = Math.floor((minPixel - chessboardSize) / 2);
    startY = startX;
    redraw();
}
getViewport();
setBackground();

window.addEventListener("resize", function () { getViewport() }, false);  // true??  

/*
function setBackground1() {
    function putPiece(left1, top1, opacity1) {
        const myNewImage2 = document.createElement('img');
        myNewImage2.src = '../sakk/dark-queen_square.jpg';
        document.querySelector('body').appendChild(myNewImage2);
        myNewImage2.style.position = "absolute";
        myNewImage2.style.left = left1;
        myNewImage2.style.top = top1;
        myNewImage2.style.width = "200px";
        myNewImage2.style.opacity = opacity1;
    }
    putPiece("100px", "100px", "0.1");
    putPiece("300px", "100px", "0.12");
    putPiece("100px", "300px", "0.12");
    putPiece("300px", "300px", "0.1");
}
setBackground1();
*/

/*
function divChessboard0() {
    var divx2 = document.createElement("div");
    for (let index1 = 0; index1 < 8; index1++) {
        for (let index2 = 0; index2 < 8; index2++) {
            divx2 = document.createElement("div");
        }
    }
    chessboard[1][1] = 0;
}
divChessboard0();
*/

/*
function divChessboard1() {
    for (let index1 = 0; index1 < 8; index1++) {
        chessboard.push([1, 6, 3, 4, 5, 6, 7, 8]);
    }
    var divx2 = document.createElement("div");
    for (let index1 = 0; index1 < 8; index1++) {
        for (let index2 = 0; index2 < 8; index2++) {
            divx2 = document.createElement("div");
            chessboard[index1][index2] = divx2;
        }
    }
    console.log(chessboard);
    console.log(chessboard[1][1]);
}
*/
function pixels() {
    let clientWidth = document.documentElement.clientWidth;
    let innerWidth = window.innerWidth;
    let clientHeight = document.documentElement.clientHeight;
    let innerHeight = window.innerHeight;
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let h = document.createElement('p');
    h.innerText = 'clientWidth: ' + clientWidth + '; innerWidth:' + innerWidth;
    h.innerText += '  //  clientHeight: ' + clientHeight + '; innerHeight:' + innerHeight;
    h.innerText += '  //  screenWidth: ' + screenWidth + '; screenHeight:' + screenHeight;
    h.style.color = 'red';

    document.querySelector('body').appendChild(h);

}
pixels();
