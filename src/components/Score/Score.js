import React from "react";
import { useState } from "react";

function Score({ score, onChange }) {
  const [currentScore, setCurrentScore] = useState(score);

  const changeScore = (newScore) => {
    setCurrentScore(newScore);
    onChange(newScore);
  };
  return (
    <div className="score w-25">
      <input
        type="number"
        className="form-control"
        value={currentScore}
        onChange={(e) => changeScore(e.target.value)}
      />
    </div>
  );
}

Score.defaultProps = {
  score: 0,
};

export default Score;
