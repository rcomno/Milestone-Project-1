function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function placehold() {
    return location.reload();
}

function win() {
    let wm = window.confirm("You've won $"+ money + "!")
    if (wm === 'true') {
        close(window)
    } else if (wm === 'false') {
        close(window)
    }
}

document.getElementById("inpWager").addEventListener('click', function(){
    let wager = Number(document.getElementById('wager').value);
    console.log(wager)
    moneyDSP.innerHTML = "$"+ wager;
    //let numberDSP = Number(document.getElementById("gamedsp").value);


    document.getElementById('numbers47').addEventListener('click', function() {
        document.getElementById('gamedsp').textContent =`${randInt(4,7)}`

        if (numberDSP >= '22') {
            let money = wager*-1;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("Busted! Do You wish to try again?")
            if (conext === 'true') {
                placehold()
                //close(window)
            } else if (conext === 'false') {
                close(window)
            }
        } else if (numberDSP === '16') {
            let money = wager*0.25;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '17') {
            let money = wager*0.50;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '18') {
            let money = wager*0.75;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
            placehold()
                //close(window)
            }
        } else if (numberDSP === '19') {
            let money = wager*1;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '20') {
            let money = wager*1.50;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            win()
        } else if (numberDSP === '21') {
            let money = wager*2;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            win()
        }
    })
    
    document.getElementById('numbers18').addEventListener('click', function() {
        document.getElementById('gamedsp').textContent =`${randInt(1,8)}`
        
        if (numberDSP >= '22') {
            let money = wager*-1;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("Busted! Do You wish to try again?")
            if (conext === 'true') {
                placehold()
                //close(window)
            } else if (conext === 'false') {
                close(window)
            }
        } else if (numberDSP === '16') {
            let money = wager*0.25;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '17') {
            let money = wager*0.50;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '18') {
            let money = wager*0.75;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
            placehold()
                //close(window)
            }
        } else if (numberDSP === '19') {
            let money = wager*1;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            let conext = window.confirm("You've won $"+ money + "Do You wish to continue gambling?")
            if (conext === 'true') {
                close(window)
            } else if (conext === 'false') {
                placehold()
                //close(window)
            }
        } else if (numberDSP === '20') {
            let money = wager*1.50;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            win()

        } else if (numberDSP === '21') {
            let money = wager*2;
            console.log(money)
            document.getElementById("moneyDSP").textContent = `${'$'+money}`
            win()
        }
    })

    /*
    if (0 < thenumber && thenumber < 15) {
        let money = wager*1;
        console.log(money)
        document.getElementById("moneyDSP").textContent = `${'$'+money}`
    } else
    */
})