import React from "react";

const ButtonVote = ({ setCopia, selected }) => {
  return (
    <button
      onClick={() => {
        setCopia((e) => {
          const updatedCopia = { ...e };
          updatedCopia[selected] += 1;
          return updatedCopia;
        });
      }}
    >
      Vote {setCopia[selected]}
    </button>
  );
};

export default ButtonVote;

