import React, { useState } from "react";

function ChoiceInput({ onConfirmation }) {
  const [choiceName, setChoiceName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); //so it doesnt actually submit to a page
    onConfirmation(choiceName);
  };

  const setName = (name) => {
    setChoiceName(name);
  };

  return (
    <div className="choice-input card container p-4">
      <form onSubmit={onSubmit}>
        <label>Please enter the name of choice to add </label>
        <input
          className="form-control"
          placeholder="Join a startup..."
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="submit"
          className="btn btn-primary"
          value="Save Choice"
          disabled={choiceName === ""}
        />
      </form>
    </div>
  );
}

export default ChoiceInput;
