"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../Sass/game.scss";
import paper from "./images/icon-paper.svg";
import rock from "./images/icon-rock.svg";
import scissors from "./images/icon-scissors.svg";
import traingle from "./images/bg-triangle.svg";
import Result from "./Result";

const Game = () => {
  const choices = [
    { name: "paper", img: paper },
    { name: "rock", img: rock },
    { name: "scissors", img: scissors },
  ];

  const [selectedChoice, setSelectedChoice] = useState();
  const [result, setResult] = useState();
  const [resultModal, setResultModal] = useState(false);
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
    } else {
      setResult("YOU LOSE");
    }
  };

  return (
    <>
      {!resultModal && (
        <div className="game">
          <div className="triangle">
            <Image src={traingle} alt="triangle" width={254} height={287} />
          </div>
          {choices.map((choice, index) => (
            <div
              onClick={() => handleGame(index)}
              className={` ${choice.name}`}
              key={choice.name}
            >
              <div className="choice">
                <Image src={choice.img} alt="choice" />
              </div>
            </div>
          ))}
        </div>
      )}
      {resultModal && (
        <Result
          result={result}
          randomChoice={choices[randomNumber.current]}
          userChoice={choices[selectedChoice]}
        />
      )}
    </>
  );
};

export default Game;
