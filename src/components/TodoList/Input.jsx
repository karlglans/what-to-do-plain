import React, {useState} from 'react';

function Input(props) {
  const [inputText, setInputText] = useState("input text");

  function _handleKeyDown(e) {
    if (e.key === 'Enter') {
      setInputText('');
      props.addTodo(e.target.value);
    }
  }

  return (
    <input
      onKeyDown={_handleKeyDown}
      onChange={(event) => setInputText(event.target.value)} 
      style={{width: '100%'}} value={inputText} />
  );
}

export default Input;