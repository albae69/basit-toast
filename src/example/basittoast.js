import React from "react";
import { basittoast } from "../class";

const ExampleBasitToast = () => {
  const handleClick = () => {
    basittoast.warning("HELLO", "bottomcenter", 3000);
  };

  return <button onClick={handleClick}>click</button>;
};

export default ExampleBasitToast;