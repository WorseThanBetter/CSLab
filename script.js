function changeColor(squareId) {
    var square = document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

setInterval(plimply, 500);

var fbr = document.querySelectorAll(".flash");

function plimply() {
    fbr.forEach(eri);
};

function eri() {
    for (var i = 0; i < 10; i++) {
        var randomColor = getRandomColor();
        fbr[i].style.backgroundColor = randomColor;
    };
};