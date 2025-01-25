import React, { ReactNode } from 'react';

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  accessor: string | ((row: T) => ReactNode);
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  align?: 'left' | 'right' | 'center';
}
interface TableProps<T extends Record<string, ReactNode>> {
  data: T[];
  columns: TableColumn<T>[];
}

const Table = <T extends Record<string, ReactNode>>({ data, columns }: TableProps<T>): React.ReactElement => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key.toString()} style={{ border: '1px solid #ddd', padding: '8px' }}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key.toString()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;