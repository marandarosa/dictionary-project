import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 6) {
              console.log(photo);
              return (
                <div className="col-6" key={index}>
                  <a href={photo.url} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.alt}
                    />
                  </a>
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
