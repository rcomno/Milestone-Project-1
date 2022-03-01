let ab = function ab(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}


document.getElementById('numberA').addEventListener('click', function(){
    console.log('Adding Number from 4-7')
    document.getElementById('gdsp').textContent = `${ab(4,7)}`
})

document.getElementById('numberB').addEventListener('click', function(){
    console.log('Adding Number from 1-8')
    document.getElementById('gdsp').textContent = `${ab(1,8)}`
})
