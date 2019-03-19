import React from 'react';
import get from 'lodash/get';

const Button = ({ row, accessor, cellIndex, rowIndex, CustomFunction, }) => {
  return(
    <span>
      { get(row, accessor) }
      <button onClick={ () => CustomFunction({ rowIndex, cellIndex }) }>send</button>
    </span>
  )
};

export default Button
