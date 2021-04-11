import React from "react";
import "./LowerPanel.css";

function LowerPanel({ onReset, onAddChoice, onAddVerdict, onResult }) {
  return (
    <div className="lowerPanel-container container my-4 position-fixed">
      <div className="row">
        <div className="col-3">
          <button type="button" className="btn btn-danger" onClick={onReset}>
            Delete All
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddChoice}
          >
            Add Choice
          </button>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddVerdict}
          >
            Add Verdict
          </button>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-success" onClick={onResult}>
            Decision
          </button>
        </div>
      </div>
    </div>
  );
}

export default LowerPanel;
