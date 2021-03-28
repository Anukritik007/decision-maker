import React from "react";
import Score from "../Score/Score";
import { useState } from "react";

function VerdictInput({ onAddVerdict }) {
  const [statement, setStatement] = useState("");
  const [score, setScore] = useState(0);

  const createVerdict = () => {
    onAddVerdict({
      statement: statement,
      score: score,
    });
    setStatement("");
    setScore(0);
  };

  return (
    <div className="verdict-input p-2 d-flex">
      <input
        className="form-control"
        placeholder="Start typing..."
        value={statement}
        type="text"
        onChange={(e) => setStatement(e.target.value)}
      />
      <Score score={score} onChange={(newScore) => setScore(newScore)} />
      <button type="button" className="btn btn-primary" onClick={createVerdict}>
        OK
      </button>
    </div>
  );
}

export default VerdictInput;
