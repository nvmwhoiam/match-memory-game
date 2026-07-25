import {
    generateId
} from './functions.js';

const cardsMap = new Map();

const cardCount = 10;
const pairsPerValue = 2;

let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let isProcessing = false;

const gameGrid = document.getElementById('gameGrid');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const winMessage = document.getElementById('winMessage');
const finalMovesDisplay = document.getElementById('finalMoves');

function randomDarkColors(count = 10) {
    for (let i = 0; i < count; i++) {
        const maxBrightness = 130;
        const r = Math.floor(Math.random() * maxBrightness);
        const g = Math.floor(Math.random() * maxBrightness);
        const b = Math.floor(Math.random() * maxBrightness);
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        cardsMap.set(generateId(), {
            cardValue: hex,
            cardMatched: false
        });
    }
}

randomDarkColors();

let cardsMapKeys = Array.from(cardsMap.keys());

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCards() {
    gameGrid.innerHTML = '';

    const shuffledKeys = shuffleArray(cardsMapKeys);

    for (let i = 0; i < pairsPerValue; i++) {
        for (const key of shuffledKeys) {
            const card = cardsMap.get(key);

            cardsUI(key, card.cardValue);
        }
    }
}

function cardsUI(key, cardValue) {
    const HTMLBlock = `
        <div class="card" data-card_id="${key}" data-color="${cardValue}">

            <div class="card-face card-front">
                <span class="front-value">?</span>
            </div>

            <div class="card-face card-back" style="background-color: ${cardValue}">
                <span class="back-value">${cardValue}</span>
            </div>

        </div>`;
    gameGrid.insertAdjacentHTML("beforeend", HTMLBlock);
}


function checkMatch() {
    isProcessing = true;

    const isEqual = flippedCards.every(val => val === flippedCards[0]);
    if (isEqual) {

        setTimeout(() => {
            handleMatch();
        }, 600);
    } else {
        gameGrid.classList.add('processing');

        setTimeout(() => {
            handleMismatch();
        }, 1000);
    }
}

function handleMatch() {
    const cardID = flippedCards[0];
    const cardElement = gameGrid.querySelectorAll(`.card[data-card_id="${cardID}"]`);

    cardElement.forEach(card => {
        card.classList.add('matched');
    });

    cardsMap.get(cardID).cardMatched = true;

    matchedPairs++;
    updateDisplay();

    flippedCards = [];
    isProcessing = false;

    // Check for win
    if (matchedPairs === cardCount) {
        handleWin();
    }
}

function handleMismatch() {
    flippedCards.forEach(id => {
        const cardElement = gameGrid.querySelectorAll(`.card[data-card_id="${id}"]`);
        cardElement.forEach(card => {
            card.classList.remove('flipped');
        });
    });

    gameGrid.classList.remove('processing');

    flippedCards = [];
    isProcessing = false;
}

function updateDisplay() {
    movesDisplay.textContent = moves;
    matchesDisplay.textContent = matchedPairs;
}

function handleWin() {
    setTimeout(() => {
        finalMovesDisplay.textContent = moves;
        winMessage.classList.add('show');
    }, 500);
}

function restartGame() {
    // Reset game state
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    isProcessing = false;

    // Hide win message
    winMessage.classList.remove('show');

    // Clear and regenerate colors for variety
    cardsMap.clear();
    randomDarkColors();
    cardsMapKeys = Array.from(cardsMap.keys());

    // Update display
    updateDisplay();

    // Create new cards and render
    createCards();
}



document.addEventListener('click', (e) => {
    const restartBtn = e.target.closest('[data-btn="restart"]');
    if (restartBtn) {
        restartGame();
    }

    const cardBtn = e.target.closest('.card');
    if (cardBtn) {
        const cardID = cardBtn.getAttribute('data-card_id');

        if (isProcessing) return;

        if (cardsMap.get(cardID) && cardsMap.get(cardID).cardMatched) {
            return;
        }

        const isAlreadyFlipped = cardBtn.classList.contains('flipped');
        if (isAlreadyFlipped) return;

        cardBtn.classList.add('flipped');
        flippedCards.push(cardID);

        if (flippedCards.length === pairsPerValue) {
            moves++;

            updateDisplay();
            checkMatch();
        }
    }
});



createCards();