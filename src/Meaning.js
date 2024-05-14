import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}