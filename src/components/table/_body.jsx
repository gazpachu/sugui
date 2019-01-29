import React from 'react';
import { Td } from './table.styles';

const TableBody = (props) => {
  const {
    data,
    onRenderCell,
    skipIDs,
    isDesktop,
    columns
  } = props;

  return (
    <tbody>
      {data && data.map(row => (
        <tr key={row.id}>
          {isDesktop
            ? Object.keys(row).map((key) => {
                if (skipIDs && key === 'id') return null;
                return <Td key={`${row.id}-${key}`}>{onRenderCell ? onRenderCell(row, key) : row[key]}</Td>;
              })
            :
            <Td>
              {Object.keys(row).map((key, i) => {
                if (columns[i]) {
                  return (
                    <div key={`${row.id}-${key}`}>
                      {columns[i].header !== '' && `${columns[i].header}: `}{onRenderCell ? onRenderCell(row, key) : row[key]}
                    </div>
                  );
                }
                return null;
              })}
            </Td>}
        </tr>
      ))}
      {props.children}
    </tbody>
  );
};

export default TableBody;
