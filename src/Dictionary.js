import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function defaultSearch() {
    let apiKey = `o8f33adb6e5ada04681tfeaf708b3b4b`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let photoApiKey = `o8f33adb6e5ada04681tfeaf708b3b4b`;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePhotosResponse);
  }

  function search(event) {
    event.preventDefault();
    defaultSearch();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    defaultSearch();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <div className="keyword-search">
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              className="search-box"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" className="submit-button" />
          </div>
          <div>
            <small>i.e. wine, travel, yoga, plant, kitten</small>
          </div>
        </form>
        <div className="container">
          <Results data={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
