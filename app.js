const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display:document.querySelector("#p1Display"),
    name:document.querySelector("#p1Name")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display:document.querySelector("#p2Display"),
    name:document.querySelector("#p2Name") 
}

const resetButton = document.querySelector("#reset");
const nameButton = document.querySelector("#nameButton");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;


//if we had multiple players we would rename the opponent parameter to opponents
//and make loop over an array. So go player, and everyone ELSE.
function updateScores(player, opponent){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
          isGameOver = true;
          player.display.classList.add("has-text-success");
          opponent.display.classList.add("has-text-danger");
          player.button.disabled = true;
          opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
      }

}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function() {
  winningScore = +this.value; // same thing as doing parseInt(this.value) this updates whatever the winning score value is.
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.display.classList.remove("has-text-danger", "has-text-success");
  p1.button.disabled = false;
  p2.button.disabled = false;
  p1.button.textContent = "+1 Player One";
  p2.button.textContent = "+1 Player Two";
};

// a better way to write the above reset function 
// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }

function namingPlayers(player, opponent) {
 const player1 = player.name.value;
  player.button.textContent = player1;
  player.name.value = "";
  const player2 = opponent.name.value;
  opponent.button.textContent = player2;
  opponent.name.value = "";
};

nameButton.addEventListener("click", function() {
  namingPlayers(p1, p2);
});

