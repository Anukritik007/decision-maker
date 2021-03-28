import React from "react";

function LowerPanel({ onReset, onAddNew, onResult }) {
  return (
    <div className="LowerPanel container mt-4">
      <div className="row">
        <div className="col-4">
          <button type="button" className="btn btn-danger" onClick={onReset}>
            Delete All
          </button>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-primary" onClick={onAddNew}>
            Add New
          </button>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-success" onClick={onResult}>
            Decision
          </button>
        </div>
      </div>
    </div>
  );
}

export default LowerPanel;
