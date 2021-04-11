import React from "react";
import EvaluationDashboard from "../EvaluationDashboard/EvaluationDashboard";
import { useState } from "react";
import LowerPanel from "../LowerPanel/LowerPanel";
import ChoiceInput from "../ChoiceInput/ChoiceInput";
import VerdictInput from "../VerdictInput/VerdictInput";

function Home() {
  const [choices, setChoices] = useState([
    {
      name: "Join a startup",
      verdicts: [
        {
          statement: "Immediate salary hike",
          score: 7,
        },
      ],
      totalScore: 0,
    },
  ]);
  const [showChoiceInput, setShowChoiceInput] = useState(false);
  const [showVerdictInput, setShowVerdictInput] = useState(false);

  const onChoiceAdd = (name) => {
    setChoices(
      choices.concat({
        name: name,
        verdicts: [
          {
            statement: "joining bonus",
            score: 8,
          },
        ],
        totalScore: 0,
      })
    );
    setShowChoiceInput(!showChoiceInput);
  };

  const handleResetAll = () => {
    setChoices([]);
  };
  const handleResult = () => {
    console.log("Your final decision should be:");
  };

  const updateChoice = (choice) => {
    console.log("Home::updateChoice:", choice);
    setChoices(
      choices.map((choice_) => {
        console.log(choice_);
        return choice_.name === choice.name ? choice : choice_;
      })
    );
  };

  return (
    <div className="home container my-4">
      {/* Dashboard containing choices cards */}
      {choices.length > 0 ? (
        <EvaluationDashboard
          choices={choices}
          onChoiceUpdate={(updatedChoice) => updateChoice(updatedChoice)}
        />
      ) : (
        "Please Add a choice"
      )}

      {/* Lower Panel to Add, reset or see final result  */}
      {/* TODO: better approach for lowerPanel & choiceInput */}
      <LowerPanel
        onAddVerdict={() => setShowVerdictInput(!showVerdictInput)}
        onAddChoice={() => setShowChoiceInput(!showChoiceInput)}
        onReset={handleResetAll}
        onResult={handleResult}
      />
      {showChoiceInput && <ChoiceInput onConfirmation={onChoiceAdd} />}
      {showVerdictInput && (
        <VerdictInput
          choices={choices}
          onAddVerdict={(newVerdict) => updateChoice(newVerdict)}
        />
      )}
    </div>
  );
}

export default Home;
