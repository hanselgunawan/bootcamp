import React from "react";

const List = props => (
  <ul className="list-group">
      {props.groceries.map(data => {
          <li className="list-group-item" key={data.id}>
              {data.name}
          </li>
      })}
  </ul>
);

export default List;