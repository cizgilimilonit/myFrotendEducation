
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;

const checker = function () {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);
    let score = Number(document.querySelector(`.score`).textContent);
    console.log(score, typeof score);

    document.querySelector(`.lastGuess`).textContent = guess

    if (!guess || guess > 20) {
        document.querySelector(`.lastGuess`).textContent = `Not a valid number`;

    } else if (guess === secretNumber) {
        document.querySelector(`.lastGuess`).textContent =
            `Gratz ${guess} is correct`;
        document.querySelector(`.guessTip`).textContent = `Congratulations`;
        {if (score > highScore) {
            document.querySelector(`.highScore`).textContent = score;
        }}
    } else { if (score > 1) {
        document.querySelector(`.guessTip`).textContent = guess > secretNumber ? `Your guess is too high!` : `Your guess is too low!`;
        score--;
        document.querySelector(`.score`).textContent = score;
    } else {
            document.querySelector(`.guessTip`).textContent = `You dumb fuck are you aware how dumb you should be to fail this game?`;
            score = 0;
            document.querySelector(`.score`).textContent = score;
    }
    } document.querySelector(`.guess`).value = ``;
};

const playAgain = function () {
    console.log(score);
    document.querySelector(`.score`).textContent = `20`;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`.guessTip`).textContent = `Please make a guess.`;
    document.querySelector(`.lastGuess`).textContent = `Waiting for your guess.`;
    document.querySelector(`.guess`).value = ``;
};

document.querySelector(`.check`).addEventListener(`click`, checker);
document.querySelector(`.plyAgain`).addEventListener(`click`, playAgain);