import React from "react";
import Choice from "../Choice/Choice";

function EvaluationDashboard({ choices, onChoiceUpdate }) {
  return (
    <div className="evaluation-dashboard container">
      {choices.map((choice, index) => (
        <Choice
          key={index}
          choice={choice}
          onChoiceUpdate={(updatedVerdicts) =>
            onChoiceUpdate({
              ...choice,
              verdicts: updatedVerdicts,
            })
          }
        />
      ))}
    </div>
  );
}

export default EvaluationDashboard;
