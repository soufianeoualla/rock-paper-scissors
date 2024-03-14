"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Game from "@/components/Game";
import Rules from "@/components/Rules";
import Score from "@/components/Score";
import Result from "@/components/Result";
import paper from "/public/images/icon-paper.svg";
import rock from "/public/images/icon-rock.svg";
import scissors from "/public/images/icon-scissors.svg";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { UserContext } from "@/lib/authContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useContext(UserContext);
  const [rulesModal, setRulesModal] = useState(false);
  const choices = [
    { name: "paper", img: paper },
    { name: "rock", img: rock },
    { name: "scissors", img: scissors },
  ];
  const router = useRouter
  const [selectedChoice, setSelectedChoice] = useState();
  const [result, setResult] = useState("");
  const [resultModal, setResultModal] = useState(false);
  const [score, setScore] = useState(0);
  const randomNumber = useRef(Math.floor(Math.random() * choices.length));
  useEffect(()=>{
    if(!user){
      router.push('/login')
    }
  })


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
      className={`${rulesModal && "background-modal"}  game-page`}
    >
      <Navbar />
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
      <Link href={"/"} className="home">
        Home
      </Link>
    </main>
  );
}
