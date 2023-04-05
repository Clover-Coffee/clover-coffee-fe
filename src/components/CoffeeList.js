import React from "react";
import { Coffee } from "./Coffee";

export const CoffeesList = ({ coffees }) => {
  return (
    <>
      {coffees.map((coffee, idx) => {
        return <Coffee coffee={coffee} key={idx} />;
      })}
    </>
  );
};
