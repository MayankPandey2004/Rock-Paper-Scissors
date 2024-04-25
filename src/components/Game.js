import React, { useState } from 'react'

const choices = ["rock", "paper", "scissors"];

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState("");
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const playGame = (choice) => {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);

        if (choice === computerChoice) {
            setResult("It's a Tie");
        } else {
            switch (choice) {
                case "rock":
                    setResult(computerChoice === "scissors" ? "You Win!" : "You Lose!");
                    break;
                case "paper":
                    setResult(computerChoice === "rock" ? "You Win!" : "You Lose!");
                    break;
                case "scissors":
                    setResult(computerChoice === "paper" ? "You Win!" : "You Lose!");
                    break;
                default:
                    break;
            }
        }

        if (result === "You Win!") {
            setPlayerScore(playerScore + 1);
        } else if (result === "You Lose!") {
            setComputerScore(computerScore + 1);
        }
    };

    const resetScores = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult("");
    };

    return (
        <div className="container">
            <h1>Rock Paper Scissors</h1>
            <div className="choices">
                <button onClick={() => playGame("rock")}>👊</button>
                <button onClick={() => playGame("paper")}>📄</button>
                <button onClick={() => playGame("scissors")}>✂</button>
            </div>
            <div id="playerDisplay">Player: {playerChoice}</div>
            <div id="computerDisplay">Computer: {computerChoice}</div>
            <div id="resultDisplay">{result}</div>
            <div className="scoreDisplay">Player Score: <span>{playerScore}</span></div>
            <div className="scoreDisplay">Computer Score: <span>{computerScore}</span></div>
            <button id="resetButton" onClick={resetScores}>Reset Scores</button>
        </div>
    );
}

export default Game;