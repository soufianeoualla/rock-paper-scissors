import Image from "next/image";
import logo from "./images/logo.svg";
import '../Sass/score.scss'
const Score = ({score}) => {
  return (
    <header>
      <Image src={logo} alt="logo" width={155} height={92} priority />
      <div className="score">
        <span>SCORE</span>
        <b>{score}</b>
      </div>
    </header>
  );
};

export default Score;
