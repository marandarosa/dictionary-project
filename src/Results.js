import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <div className="container">
          <h2 className="text-center">{props.data.word}</h2>
          <h5 className="text-center">/{props.data.phonetic}/</h5>
          {props.data.meanings.map(function (meaning, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
