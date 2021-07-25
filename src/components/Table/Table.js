import React from "react";
import { Table as TableComponent } from "reactstrap";

import "./Table.css";

class Table extends React.Component {
  render() {
    const itemData = this.props.itemData;
    const itemDataKeys = Object.keys(itemData[0]);

    const thead = () => {
      const result = [];
      for (let i = 0; i < itemDataKeys.length; i++) {
        result.push(<th key={itemDataKeys[i]}>{itemDataKeys[i]}</th>);
      }
      return result;
    };
    const tbody = () => {
      const result = [];
      itemData.map((item) => {
        const itemDataValues = [];
        for (let i = 0; i < itemDataKeys.length; i++) {
          itemDataValues.push(
            <td key={itemDataKeys[i]}>{item[itemDataKeys[i]]}</td>
          );
        }
        result.push(<tr key={item.id}>{itemDataValues}</tr>);
      });
      return result;
    };
    return (
      <TableComponent responsive hover>
        <thead>
          <tr>{thead()}</tr>
        </thead>
        <tbody>{tbody()}</tbody>
      </TableComponent>
    );
  }
}

export default Table;
