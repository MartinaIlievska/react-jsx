import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../actions/GameActions";

function Game() {
  const { targetNumber, numberOfGuesses, attempts, feedback } = useSelector((state) => state.guesser);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [feedback]);

  const guessInput = () => {
    const guess = Number(input);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter valid number between 1 and !00");
      return;
    }
    dispatch(numberOfGuesses(guess));
    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      guessInput();
    }
  };
  const startNewGame = () => {
    dispatch(startGame());
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div>
      <h1>GUESS NUMBER BETWEEN 1 & 100</h1>
      <input
        ref={inputRef}
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a number"
      />
      <button onClick={guessInput}>GUESS</button>
      {feedback && <p>{feedback}</p>}
      <p>Number of attempts: {attempts}</p>
      <p>Your guesses: {numberOfGuesses}</p>
      {feedback === "CORRECT!" && (
        <div>
          <h2>TRY NEW GAME</h2>
          <button onClick={startNewGame}>Start new game</button>
        </div>
      )}
    </div>
  );
}
export default Game;
