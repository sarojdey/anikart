import React from "react";
import "./style.scss";
import fish from "../../assets/fish-bone.png";
function NothingToShow() {
  return (
    <div className="container">
      <div className="card">
      <img src={fish} alt="fish" className="fish" />
      There is nothing here!!
      </div>
    </div>
  );
}

export default NothingToShow;
