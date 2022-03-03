let wager = document.getElementById('wager')

function randInt(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var rif47 = randInt(4,7)
var rif18 = randInt(1,8)

document.getElementById('numbers47').addEventListener('click', function(){
    console.log(rif47)
})

document.getElementById('numbers18').addEventListener('click', function(){
    console.log(randInt(1,8))
})