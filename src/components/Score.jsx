import Image from "next/image";
import logo from "./images/logo.svg";
import '../Sass/score.scss'
const Score = () => {
  return (
    <header>
      <Image src={logo} alt="logo" width={155} height={92} />
      <div className="score">
        <span>SCORE</span>
        <b>12</b>
      </div>
    </header>
  );
};

export default Score;
