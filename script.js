function changeColor(squareId) {
    var square = document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        if (i < 4) {
        color += letters[Math.floor(Math.random() * 10)];
        } else {
        color += letters[Math.floor(Math.random() * 4 + 12)]; 
        }; 
    };
    console.log(color);
    return color;
};


function flashColors() {
var flashes = document.querySelectorAll(".flash");
flashes.forEach(function(flash){

var randomColor = getRandomColor();
flash.style.backgroundColor = randomColor;
})
}

setInterval(flashColors, 100);