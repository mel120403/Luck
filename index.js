document.addEventListener("DOMContentLoaded", function() {
    const choices = ["rock", "paper", "scissors"];
    const choiceImages = document.querySelectorAll(".choice");
    const guessButton = document.getElementById("guessButton");
    const resultParagraph = document.getElementById("result");
    const scoreParagraph = document.getElementById("score");
    const refreshMessage = document.getElementById("refreshMessage");

    let score = 0;

    choiceImages.forEach(image => {
        image.addEventListener("click", function() {
            const userChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(userChoice, computerChoice);
            resultParagraph.textContent = `Computer chose ${computerChoice}. ${result}`;
            updateScore(result);
            refreshMessage.style.display = "block"; // Display refresh message after each round
        });
    });

    guessButton.addEventListener("click", function() {
        location.reload();
    });

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function updateScore(result) {
        if (result.includes("win")) {
            score++;
        }
        scoreParagraph.textContent = `Score: ${score}`;
    }
});
