import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiKey = `o8f33adb6e5ada04681tfeaf708b3b4b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="What word would you like defined?"
          className="search-box"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" className="submit-button" />
      </form>
      <small>i.e. wine, travel, yoga, plant, kitten</small>
    </div>
  );
}
