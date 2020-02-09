import React, {useState} from 'react';

function Input() {
  const [inputText, setInputText] = useState("input text");
  return (
    <input onChange={(event) => setInputText(event.target.value)} style={{width: '100%'}} value={inputText} />
  );
}

export default Input;