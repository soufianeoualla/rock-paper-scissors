import Image from "next/image";
import logo from "./images/logo.svg";
import logo_advanced from './images/logo-bonus.svg'
import '../Sass/score.scss'
const Score = ({score,type}) => {
  return (
    <header>
      <Image src={type === 'advanced'? logo_advanced: logo} alt="logo" width={''} height={''} priority />
      <div className="score">
        <span>SCORE</span>
        <b>{score}</b>
      </div>
    </header>
  );
};

export default Score;
