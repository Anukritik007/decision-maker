import React from "react";
import Choice from "../Choice/Choice";

function EvaluationDashboard({ choices, onChoiceUpdate }) {
  return (
    <div className="evaluation-dashboard container row">
      {choices.map((choice, index) => (
        <div key={index} className="col-md-6 col-sm-12">
          <Choice
            choice={choice}
            onChoiceUpdate={(updatedVerdicts) =>
              onChoiceUpdate({
                ...choice,
                verdicts: updatedVerdicts,
              })
            }
          />
        </div>
      ))}
    </div>
  );
}

export default EvaluationDashboard;
