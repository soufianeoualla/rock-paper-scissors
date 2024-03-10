"use client";
import Image from "next/image";
import "../Sass/game.scss";
import traingle from "./images/bg-triangle.svg";
import pentagone from "./images/bg-pentagon.svg";
const Game = ({ choices, handleGame, type }) => {
  return (
    <>
      <div className={` ${type === "advanced" ? "advanced-game" : "game"} `}>
        <div className="triangle">
          <Image
            src={type === "advanced" ? pentagone : traingle}
            alt="triangle"
            width={type === "advanced" ? 345 : 254}
            height={type === "advanced" ? 345 : 287}
          />
        </div>
        {choices.map((choice, index) => (
          <div
            onClick={() => handleGame(index)}
            className={`${type === "advanced" ? "advanced-" : ""}${
              choice.name
            }`}
            key={choice.name}
          >
            <div
              className={` ${
                type === "advanced" ? "advanced-choice" : "choice"
              }  `}
            >
              <Image src={choice.img} alt="choice" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Game;
