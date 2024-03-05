import React from "react";

export default function Example(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Example">
        <strong>Example:</strong> <em>{props.data}</em>
      </div>
    );
  } else return null;
}
