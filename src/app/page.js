"use client";
import Game from "@/components/Game";
import Rules from "@/components/Rules";
import Score from "@/components/Score";
import { useEffect, useRef, useState } from "react";
import "../Sass/home.scss";
import paper from "/public/images/icon-paper.svg";
import rock from "/public/images/icon-rock.svg";
import scissors from "/public/images/icon-scissors.svg";
import Result from "@/components/Result";

export default function Home() {
  const [rulesModal, setRulesModal] = useState();
  const choices = [
    { name: "paper", img: paper },
    { name: "rock", img: rock },
    { name: "scissors", img: scissors },
  ];

  const [selectedChoice, setSelectedChoice] = useState();
  const [result, setResult] = useState();
  const [resultModal, setResultModal] = useState(false);
  const [score, setScore] = useState(0);
  const randomNumber = useRef(null);
  useEffect(() => {
    randomNumber.current = Math.floor(Math.random() * choices.length);
  }, [selectedChoice, choices.length]);

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
      setScore((prev) => prev + 1);
    } else {
      setResult("YOU LOSE");
      setScore((prev) => prev - 1);
    }
  };
  const playAgain = () => {
    setResultModal(false);
    setSelectedChoice("");
    setResult("");
    randomNumber.current = null;
  };
  return (
    <main
      onClick={() => rulesModal && setRulesModal(false)}
      className={`${rulesModal && "background-modal"}`}
    >
      <Score score={score} />
      {!resultModal && <Game choices={choices} handleGame={handleGame} />}
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
