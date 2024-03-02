import React from "react";
import "./style.scss";
import { useLocation } from "react-router-dom";

function Categories() {
  const location = useLocation();
  return <div className="title">{location.state.type}</div>;
}

export default Categories;
