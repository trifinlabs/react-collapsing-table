//React
import React from 'react';
import get from 'lodash/get';
import { CellPropType } from '../utils/propTypes';
//Components
import { expandIcon } from '../assets/icons/Icon';

const Cell = ({ row, accessor, cellIndex, rowIndex, expandRow, hiddenColumnsLength, CustomComponent, CustomFunction, icons }) => {
    const icon = expandIcon({ cellIndex, rowIndex, row, hiddenColumnsLength, expandRow, icons });
    const content = CustomComponent === undefined
                  ? <span dangerouslySetInnerHTML={{ __html: get(row, accessor) }} />
                  : <CustomComponent row={ row }
                                  rowIndex={ rowIndex }
                                  cellIndex={ cellIndex }
                                  accessor={ accessor }
                                  CustomFunction={ CustomFunction } />
      return <td className={ accessor }>{ icon }{ content }</td>;
};

Cell.propTypes = CellPropType;

export default Cell
