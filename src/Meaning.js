import React from "react";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <strong>{props.meaning.partOfSpeech}</strong>
      <ul>
        <li>{props.meaning.definition}</li>
        <Example data={props.meaning.example} />
      </ul>
    </div>
  );
}
