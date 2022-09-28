let score1 = 0
let score2 = 0
let home_fouls = 0
let guest_fouls = 0

document.getElementById("home-fouls").textContent = home_fouls

document.getElementById("guest-fouls").textContent = guest_fouls


document.getElementById("home-score").textContent = score1
document.getElementById("guest-score").textContent = score2


function add1home() {
    score1 +=1
    document.getElementById("home-score").textContent = score1

}

function add2home() {
    score1 +=2
    document.getElementById("home-score").textContent = score1

}

function add3home() {
    score1 +=3
    document.getElementById("home-score").textContent = score1
}

function add1guest() {
    score2 +=1
    document.getElementById("guest-score").textContent = score2

}

function add2guest() {
    score2 +=2
    document.getElementById("guest-score").textContent = score2

}

function add3guest() {
    score2 +=3
    document.getElementById("guest-score").textContent = score2
}

function reset_score(){
    score1 = 0
    score2 = 0
    home_fouls = 0
    guest_fouls = 0
    document.getElementById("home-score").textContent = score1
    document.getElementById("guest-score").textContent = score2
    document.getElementById("home-fouls").textContent = home_fouls
    document.getElementById("guest-fouls").textContent = guest_fouls
}

function homeFoul() {
    home_fouls += 1
    document.getElementById("home-fouls").textContent = home_fouls
}

function guestFoul() {
    guest_fouls += 1
    document.getElementById("guest-fouls").textContent = guest_fouls
}
