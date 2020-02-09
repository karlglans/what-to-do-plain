import React, {useState, useEffect} from 'react';
import Naviagation from './Navigation';

function Bottom(props) {
  const [tasksLeft, setTasksLeft] = useState(10);

  useEffect(() => {
    setTasksLeft(props.listData.length - props.listData.filter(x => x.checked).length);
  }, [props.listData]);

  return (
    <div>
      <span>
        {tasksLeft} items left
      </span>
      <Naviagation />
    </div>
  );
}

export default Bottom;