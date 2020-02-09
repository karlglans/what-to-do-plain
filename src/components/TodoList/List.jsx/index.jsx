import React, {useState, useEffect}  from 'react';
import { useLocation } from "react-router-dom";
import ListItem from './ListItem';

import './index.css';

const optEverything = 'optEverything';
const optChecked = 'optChecked';
const optUnchecked = 'optUnchecked';

function TodoList(props) {
  const [selection, setSelection] = useState(optUnchecked)
  let location = useLocation();

  function doFiler(sel, {checked}) {
    if (sel === optChecked) return checked;
    if (sel === optUnchecked) return !checked;
    return true;
  }
  
  const listItems = props.listData
    .filter(it => doFiler(selection, it))
    .map(it => (
    <ListItem key={it.id} ischecked={it.checked} handleCheck={props.handleCheck} id={it.id} >
      {it.message}
    </ListItem>));

  useEffect(() => {
    if(location.pathname === '/active') setSelection(optUnchecked);
    else if(location.pathname === '/compleated') setSelection(optChecked);
    else setSelection(optEverything);
  }, [location]);

  return (
    <ul className='todo-list'>
      {listItems}
    </ul>
  );
}

export default TodoList;
