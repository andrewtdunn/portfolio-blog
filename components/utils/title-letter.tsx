import { useEffect, useState } from "react";
import styles from "./title-letter.module.scss";
import { VT323 } from "next/font/google";

type TypeLetterProp = {
  character: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPRSTUVWVYZ";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
});

const TitleLetter = ({ character }: TypeLetterProp) => {
  const [guess, setGuess] = useState(" ");
  const [letterGuessed, setLetterGuessed] = useState(false);

  useEffect(() => {
    setLetterGuessed(false);
    if (character == " ") {
      setGuess(" ");
      return;
    }

    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const numGuesses = 15;
    const guessNumber = async () => {
      for (let i = 0; i < numGuesses; i++) {
        let timeLength = Math.ceil(Math.random() * 50 + 10);
        await sleep(timeLength);
        const guess = ALPHABET.charAt(Math.ceil(Math.random() * 26));
        setGuess(guess);
        if (guess == character.toUpperCase()) {
          setLetterGuessed(true);
        } else {
          if (i == numGuesses - 1) {
            setLetterGuessed(true);
          }
        }
      }
    };

    guessNumber();
  }, [character]);

  return (
    <span
      className={`${letterGuessed ? styles.visible : styles.hidden} ${
        vt323.className
      }`}
    >
      {letterGuessed ? character : guess}
    </span>
  );
};

export default TitleLetter;
