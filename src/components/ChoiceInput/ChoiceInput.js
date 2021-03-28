import React from "react";

function ChoiceInput({ onConfirmation }) {
  let choiceName = "";

  const onSubmit = (e) => {
    e.preventDefault(); //so it doesnt actually submit to a page
    if (choiceName === "") {
      alert("Please add choice name");
      return;
    }
    onConfirmation(choiceName);
  };

  const setName = (name) => {
    choiceName = name;
  };

  return (
    <div className="choice-input card container p-4">
      <form onSubmit={onSubmit}>
        <label>Please enter the name of choice to add </label>
        <input
          className="form-control"
          placeholder="Join a startup..."
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" value="Save Choice" />
      </form>
    </div>
  );
}

export default ChoiceInput;
