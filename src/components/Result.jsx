import Image from "next/image";
import "../Sass/result.scss";
import { useEffect, useState } from "react";
const Result = ({ result, randomChoice, userChoice,handleplayAgain }) => {
  const [randomPick, setRandomPick] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRandomPick(true);
    }, 2000);
    setTimeout(()=>{
        setPlayAgain(true)
    },3000)
  });
  return (
    <div className="results">
      <div className="picked">
        <h2>YOU PICKED</h2>
        <div className={`picked-results ${userChoice.name}`}>
          <div className="choice">
            <Image src={userChoice.img} alt="choice" />
          </div>
        </div>
      </div>
      {playAgain && (
        <div className="play-again">
          <h1>
            {result}
          </h1>
            <button
            onClick={handleplayAgain}
             className="play-again">PLAY AGAIN</button>
        </div>
      )}
      <div className="picked">
        <h2>THE HOUSE PICKED</h2>
        {randomPick && (
          <div className={` picked-results  ${randomChoice.name}`}>
            <div className="choice">
              <Image src={randomChoice.img} alt="choice" />
            </div>
          </div>
        )}
        {!randomPick && <div className="circle"></div>}
      </div>
    </div>
  );
};

export default Result;
