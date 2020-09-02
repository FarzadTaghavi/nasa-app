import React from "react";

export default function Image(props) {
  return (
    <div>
      <img alt={props.description} src={props.img} />
    </div>
  );
}
