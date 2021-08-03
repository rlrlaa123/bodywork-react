import React from "react";
import { Table as TableComponent } from "reactstrap";

import "./Table.css";

class Table extends React.Component {
  handleClick = (id) => {
    this.props.history.push("/notice/" + id);
  };
  render() {
    const { itemData, itemDataKeys } = this.props;
    const thead = () => {
      const result = [];
      for (let i = 0; i < itemDataKeys.length; i++) {
        result.push(<th key={itemDataKeys[i]}>{itemDataKeys[i]}</th>);
      }
      return result;
    };
    const tbody = () => {
      const result = [];
      itemData.forEach((item) => {
        const itemDataValues = [];
        for (let i = 0; i < itemDataKeys.length; i++) {
          itemDataValues.push(
            <td key={itemDataKeys[i]}>{item[itemDataKeys[i]]}</td>
          );
        }
        result.push(
          <tr
            key={item.id}
            value={item.id}
            onClick={() => this.handleClick(item.id)}
          >
            {itemDataValues}
          </tr>
        );
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
