import { useEffect, useState } from "react";
import gameMath from "../../utils/math";

const useGameState = () => {
  const [stars, setStars] = useState(gameMath.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(
    gameMath.range(1, 9)
  );
  const [candidateNumbers, setCandidateNumbers] = useState([] as number[]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidateNumbers: number[]) => {
    if (gameMath.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (number) => !newCandidateNumbers.includes(number)
      );

      setStars(gameMath.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]);
    }
  };

  return {
    stars,
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    setGameState
  };
};

export default useGameState;
