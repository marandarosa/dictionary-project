import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example">
        <strong>Example:</strong> <em>{props.data}</em>
      </div>
    );
  } else return null;
}
