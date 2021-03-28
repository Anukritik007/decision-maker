import React from "react";
import Score from "../Score/Score";
import Statement from "../Statement/Statement";
import { useState } from "react";

function Verdict({ verdict, onVerdictUpdate }) {
  const [updatedVerdict, setUpdatedVerdict] = useState(verdict);
  const [statement, setStatement] = useState(updatedVerdict.statement);
  const [score, setScore] = useState(updatedVerdict.score);
  const onScoreChange = (newScore) => {
    setScore(newScore);
    setUpdatedVerdict({ ...updatedVerdict, score: newScore });
  };
  return (
    <div className="verdict d-flex justify-content-between">
      <Statement statement={statement} />
      <Score score={score} onChange={onScoreChange} />
      {/*TODO delete */}
    </div>
  );
}

export default Verdict;
