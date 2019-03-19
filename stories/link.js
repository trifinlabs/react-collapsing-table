import React from 'react';
import get from 'lodash/get';

const Link = ({ row, accessor, cellIndex, rowIndex, expandRow, hiddenColumnsLength, CustomFunction, }) => {
  return(
    <a href={ CustomFunction() }>{get(row, accessor)}</a>
  )
}
export default Link
