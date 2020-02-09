import React from 'react';

function ListItem(props) {
  return (
    <li className='todo-list-item'>
      <input type="checkbox"
        name="done"
        checked={props.ischecked}
        onChange={() => props.handleCheck(props.id)}>
        </input>
      {props.children}
    </li>
  );
}

export default ListItem;