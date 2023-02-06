const scoreHome = document.getElementById("score-home")
const scoreGuest = document.getElementById("score-guest")

// Home Count
let homeCount = 0;

const homePlusOne = () => {
    homeCount += 1;
    scoreHome.textContent = homeCount;
}

const homePlusTwo = () => {
    homeCount += 2;
    scoreHome.textContent = homeCount;
}

const homePlusThree = () => {
    homeCount += 3;
    scoreHome.textContent = homeCount;
}

const homeReset = () => {
    scoreHome.textContent = 0;
    homeCount = 0;
}

// Guest Count
let guestCount = 0;

const guestPlusOne = () => {
    guestCount += 1;
    scoreGuest.textContent = guestCount;
}

const guestPlusTwo = () => {
    guestCount += 2;
    scoreGuest.textContent = guestCount;
}

const guestPlusThree = () => {
    guestCount += 3;
    scoreGuest.textContent = guestCount;
}

const guestReset = () => {
    scoreGuest.textContent = 0;
    guestCount = 0;
}

// Start New Game
const newGame = () => {
    scoreHome.textContent = 0;
    homeCount = 0;
    scoreGuest.textContent = 0;
    guestCount = 0;
}

