let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let countHome = 0
let countGuest = 0

function plusOne() {
    countHome += 1
    homeEl.textContent = countHome
}

function plusTwo() {
    countHome += 2
    homeEl.textContent = countHome
}

function plustThree() {
    countHome += 3
    homeEl.textContent = countHome
}

function guestOne() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function guestThree() {
    countGuest += 3
    guestEl.textContent = countGuest
}