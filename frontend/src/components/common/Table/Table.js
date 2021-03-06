import React from "react";
import { Table as TableComponent } from "reactstrap";

const Table = ({ itemData, itemDataKeys, history, type }) => {
  const handleClick = (id) => {
    history.push(`/${type}/` + id);
  };
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
          <td key={itemDataKeys[i]}>
            {itemDataKeys[i] === "publishedDate"
              ? new Date(item[itemDataKeys[i]]).toLocaleDateString()
              : item[itemDataKeys[i]]}
          </td>
        );
      }

      result.push(
        <tr
          key={item._id}
          value={item._id}
          onClick={() => handleClick(item._id)}
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
};

export default Table;
