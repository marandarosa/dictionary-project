import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <strong>{props.meaning.partOfSpeech}</strong>
      <ul>
        <li>{props.meaning.definition}</li>
        <Example data={props.meaning.example} />
        <Synonyms data={props.meaning.synonyms} />
      </ul>
    </div>
  );
}
