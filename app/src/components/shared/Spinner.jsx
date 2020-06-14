import React from "react";
import "../../css/spinner.css";

const Spinner = () => (
  <div className="has-text-centered">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
