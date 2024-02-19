import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <strong className="fst-italic">{props.meaning.partOfSpeech}</strong>
      <ul>
        <li>{props.meaning.definition}</li>
        <em>{props.meaning.example}</em>
      </ul>
    </div>
  );
}
