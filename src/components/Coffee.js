/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Coffee = (props) => {
  return (
    <>
      <h3>{props.coffee.title}</h3>
      <img src={props.coffee.image} alt={props.coffee.title} />
    </>
  );
};
