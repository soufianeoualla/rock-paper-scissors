"use client";
import Image from "next/image";
import "../Sass/game.scss";
import traingle from "./images/bg-triangle.svg";
import pentagone from './images/'
const Game = ({ choices, handleGame ,type }) => {
  return (
    <>
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
    </>
  );
};

export default Game;
