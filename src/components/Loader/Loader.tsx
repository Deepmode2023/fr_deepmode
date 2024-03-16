import React from "react";
import "./animate.css";

const Loader = ({
  scale = 1,
  color = "black",
}: {
  scale?: number;
  color?: string;
}) => {
  return (
    <div style={{ color, transform: `scale(${scale})` }} className="lds-ripple">
      <div />
      <div />
    </div>
  );
};

export default Loader;
