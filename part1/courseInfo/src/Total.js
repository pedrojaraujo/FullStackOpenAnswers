import React from "react";

export const Total = (props) => {
 
  return (
    <div>
      <p>Número de exercícios {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );
};
