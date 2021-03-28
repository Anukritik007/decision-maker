import React from "react";
import Verdict from "../Verdict/Verdict";
import VerdictInput from "../VerdictInput.js/VerdictInput";

function Choice({ choice, onChoiceUpdate }) {
  let updatedChoice_ = choice;
  const updateChoice = (newVerdict) => {
    updatedChoice_ = choice.verdicts.concat(newVerdict);
    console.log("updatedChoice_", updatedChoice_);
    onChoiceUpdate(updatedChoice_);
  };
  return (
    <div className="choice card my-2">
      <div className="card-header">{choice.name}</div>
      <div className="verdicts p-2">
        {choice.verdicts.map((verdict, index) => {
          return (
            <Verdict
              key={index}
              verdict={verdict}
              // onVerdictUpdate={}
            />
          );
        })}
      </div>
      <VerdictInput onAddVerdict={(newVerdict) => updateChoice(newVerdict)} />
    </div>
  );
}

export default Choice;
