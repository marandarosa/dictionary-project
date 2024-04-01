import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>{" "}
        {props.data.map(function (synonym, index) {
          return (
            <span key={index} className="similar">
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else return null;
}
