function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById("inpWager").addEventListener('click', function(){
    let wager = Number(document.getElementById('wager').value);
    console.log(wager)
    moneyDSP.innerHTML = "$"+ wager;
    let numberDSP = document.getElementById("gamedsp")


    document.getElementById('numbers47').addEventListener('click', function() {
    })
    
    document.getElementById('numbers18').addEventListener('click', function() {
    })

    /*

    if (numberDSP >= '22') {
        let money = wager*-1;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    }
        
    if (numberDSP === '16') {
        let money = wager*0.25;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    } else if (numberDSP === '17') {
        let money = wager*0.50;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    } else if (numberDSP === '18') {
        let money = wager*0.75;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    } else if (numberDSP === '19') {
        let money = wager*1;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    } else if (numberDSP === '20') {
        let money = wager*1.50;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        }
    } else if (numberDSP === '21') {
        let money = wager*2;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
        let conext = window.confirm("Do You wish to continue gambling?")
        if (conext === 'true') {
            close(window)
        } else if (conext === 'false') {
            placehold()
        } 
    
    }
    */

})