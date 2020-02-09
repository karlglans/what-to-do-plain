import React, {useState, useEffect} from 'react';
import List from './List.jsx';
import Input from './Input.jsx';
import Bottom from './Bottom';
import './index.css';

function TodoList() {
  const [listData, setListData] = useState([{checked: false, message: 'thing 1'}, {checked: false, message: 'thing 2'}]);
  return (
    <div className='todo-list'>
      <Input />
      <List listData={listData}/>
      <Bottom listData={listData} />
    </div>
  );
}

export default TodoList;