import React from 'react';
import get from 'lodash/get';

const Button = ({ row, accessor, CustomFunction }) => {
  return <button onClick={ CustomFunction }>{ get(row, accessor) }</button>
};

export default Button;
