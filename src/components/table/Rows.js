//React
import React from 'react';
import { array, arrayOf, string, shape } from 'prop-types';
//Components
import Row from './Row';

const Rows = ({rows, columns, actions }) => {
    const tableRows = rows.map((row, index) => {
        return <Row key={ index }
                    row={ row }
                    columns={ columns }
                    actions={ actions }
                    rowIndex={ index } />
    });

    return (
        <tbody>
            { tableRows }
        </tbody>
    );
};

Rows.PropTypes = {
  rows: array.isRequierd,
  columns: arrayOf(shape({
    accessor: string.isRequired,
    label: string.isRequired,
  }))
};

export default Rows
