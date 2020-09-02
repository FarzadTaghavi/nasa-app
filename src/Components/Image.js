import React from "react";

export default function Image(props) {
  return (
    <div>
      <h3>{props.description}</h3>
      <img alt={props.description} src={props.img} />
    </div>
  );
}
