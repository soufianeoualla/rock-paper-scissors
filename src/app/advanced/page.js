"use client";
import React, { useRef, useState } from "react";
import Game from "@/components/Game";
import Rules from "@/components/Rules";
import Score from "@/components/Score";
import Result from "@/components/Result";
import paper from "/public/images/icon-paper.svg";
import rock from "/public/images/icon-rock.svg";
import scissors from "/public/images/icon-scissors.svg";
import spock from "/public/images/icon-spock.svg";
import lizard from "/public/images/icon-lizard.svg";


export default function Home() {
  const [rulesModal, setRulesModal] = useState(false);
  const choices = [
    { name: "paper", img: paper },
    { name: "rock", img: rock },
    { name: "scissors", img: scissors },
    { name: "spock", img: spock },
    { name: "lizard", img: lizard },

  ];

  const [selectedChoice, setSelectedChoice] = useState();
  const [result, setResult] = useState("");
  const [resultModal, setResultModal] = useState(false);
  const [score, setScore] = useState(0);
  const randomNumber = useRef(Math.floor(Math.random() * choices.length));

  const handleGame = (index) => {
    setSelectedChoice(index);
    setResultModal(true);
    const userWins = {
      paper: "rock",
      rock: "scissors",
      scissors: "paper",
    };
    const randomChoice = choices[randomNumber.current];
    const userChoice = choices[index];
    if (userChoice.name === randomChoice.name) {
      setResult("IT'S A DRAW");
    } else if (userWins[userChoice.name] === randomChoice.name) {
      setResult("YOU WIN");
      setTimeout(() => {
        setScore((prev) => prev + 1);
      }, 3000);
    } else {
      setResult("YOU LOSE");
      if (score > 0) {
        setTimeout(() => {
          setScore((prev) => prev - 1);
        }, 3000);
      }
    }
  };

  const playAgain = () => {
    setResultModal(false);
    setSelectedChoice("");
    setResult("");
    randomNumber.current = Math.floor(Math.random() * choices.length);
  };

  return (
    <main
      onClick={() => rulesModal && setRulesModal(false)}
      className={`${rulesModal && "background-modal"}`}
    >
      <Score score={score} />
      {!resultModal && <Game choices={choices} handleGame={handleGame} type='advanced' />}
      <button onClick={() => setRulesModal(true)} className="rules-button">
        Rules
      </button>
      {rulesModal && <Rules setRulesModal={setRulesModal} />}
      {resultModal && (
        <Result
          result={result}
          randomChoice={choices[randomNumber.current]}
          userChoice={choices[selectedChoice]}
          handleplayAgain={playAgain}
        />
      )}
    </main>
  );
}
