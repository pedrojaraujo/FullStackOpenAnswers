import React from 'react';

const Part = ({ exercises }) => {
  const soma = exercises.reduce((a, b) => a + b, 0);

  return <h3>Total of {soma} exercises</h3>;
};

export default Part;

