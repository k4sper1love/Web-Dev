alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

function randomInteger(a, b){
    return Math.floor(min + Math.random() * (max + 1 - min));
}