import React, {useState} from 'react';
import List from './List.jsx';
import Input from './Input.jsx';
import Bottom from './Bottom';
import './index.css';

function TodoList() {
  const [listData, setListData] = useState([
    {id: 1, checked: true, message: 'thing 1'}, 
    {id: 2, checked: false, message: 'thing 2'},
    {id: 3, checked: true, message: 'thing 3'}, 
    {id: 4, checked: false, message: 'thing 4'}]);
  const [nextId, setNextId] = useState(10);

  function _getNextId() {
    setNextId(nextId + 1);
    return nextId;
  }

  function handleCheck(msgId) {
    const msgIdx = listData.findIndex(msg => msg.id === msgId);
    if (msgIdx !== -1) {
      listData[msgIdx].checked = !listData[msgIdx].checked;
      const newList = [...listData];
      setListData(newList);
    }
  }

  function addTodo(message) {
    if (message && message.length > 1) {
      const newMessage = {checked: false, message, id: _getNextId()};
      const newList = [newMessage, ...listData, ];
      setListData(newList);
    }
  }
  
  return (
    <div className='todo-list'>
      <Input addTodo={addTodo} />
      <List listData={listData} handleCheck={handleCheck}/>
      <Bottom listData={listData} />
    </div>
  );
}

export default TodoList;