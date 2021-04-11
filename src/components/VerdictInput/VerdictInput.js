import React from "react";
import Score from "../Score/Score";
import { useState } from "react";

function VerdictInput({ choices, onAddVerdict }) {
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
    <div className="verdict-input card p-2">
      <label>What's on your mind?</label>
      <input
        className="form-control"
        placeholder="Start typing..."
        value={statement}
        type="text"
        onChange={(e) => setStatement(e.target.value)}
      />
      <div>
        {choices.map((choice_, index_) => {
          return (
            <div className="choice-selection d-flex justify-content-between">
              <div key={index_}>{choice_.name}</div>
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
              </div>
              <Score
                score={score}
                onChange={(newScore) => setScore(newScore)}
              />
            </div>
          );
        })}
      </div>
      <button type="button" className="btn btn-primary" onClick={createVerdict}>
        OK
      </button>
    </div>
  );
}

export default VerdictInput;
