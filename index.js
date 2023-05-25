let comScore = 0,
  playerScore = 0,
  round = 0;

const comScoreDisplay = document.getElementById("com-score");
const playerScoreDisplay = document.getElementById("player-score");


const choiceButtons = document.querySelectorAll(
  ".player-choice-section button"
);


const comImage = document.getElementById("com-image");
const playerImage = document.getElementById("player-image");

const result = document.querySelector(".result p");
const resultSection=document.querySelector('.result')

function generateRandomChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) return { choice: "paper", src: `./assets/icons/paper.png` };
  if (num === 1)
    return { choice: "scissor", src: `./assets/icons/scissors.png` };
  if (num === 2) return { choice: "rock", src: `./assets/icons/rock.png` };
}

//event listners

choiceButtons.forEach((btn) =>
  btn.addEventListener("click",clickHandler )
);

function clickHandler(event)  {
   
    console.log(event.target.value);
    const value = event.target.value;
    if (value === "paper")
      playerImage.setAttribute("src", `./assets/icons/paper.png`);
    if (value === "scissor")
      playerImage.setAttribute("src", `./assets/icons/scissors.png`);
    if (value === "rock")
      playerImage.setAttribute("src", `./assets/icons/rock.png`);

    const { choice, src } = generateRandomChoice();

    comImage.setAttribute("src", src);

    

    if (choice === "paper" && value === "scissor") {
      playerScore++;
      playerScoreDisplay.innerHTML = playerScore;
      comScoreDisplay.innerHTML = comScore;
      round++;
      result.innerHTML = " YOU WON";
    } else if (choice === "rock" && value === "paper") {
      playerScore++;
      playerScoreDisplay.innerHTML = playerScore;
      comScoreDisplay.innerHTML = comScore;
      round++;
      result.innerHTML = " YOU WON";
    } else if (choice === value) {
      round++;
      result.innerHTML = "DRAW";
    } else {
      comScore++;
      playerScoreDisplay.innerHTML = playerScore;
      comScoreDisplay.innerHTML = comScore;
      round++;
      result.innerHTML = "YOU LOST";
    }

    if(playerScore>=1){
        console.log(document.querySelector('.end-game').style.opacity='1')
        choiceButtons.forEach(btn=>btn.setAttribute('disabled',true))
    }
  }
