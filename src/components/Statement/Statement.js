import React from "react";

function Statement({ statement }) {
  return (
    <div className="statement">
      {statement}
      <a href="/">Edit</a>
    </div>
  );
}

export default Statement;
