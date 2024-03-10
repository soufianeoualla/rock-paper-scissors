"use client";
import Image from "next/image";
import "../Sass/rules.scss";
import rules from "./images/image-rules.svg";
import close from "./images/icon-close.svg";
import advanced_rules from "./images/image-rules-bonus.svg";
const Rules = ({ setRulesModal, type }) => {
  return (
    <>
      <div className="rules">
        <div className="top">
          <h1>Rules</h1>
          <Image
            onClick={() => setRulesModal(false)}
            src={close}
            alt="close button"
            width={20}
            height={20}
          />
        </div>
        <Image
          src={type === "advanced" ? advanced_rules : rules}
          alt="rules"
          width={type === "advanced" ? 336 : 305}
          height={type === "advanced" ? 330 : 271}
        />
      </div>
    </>
  );
};

export default Rules;
