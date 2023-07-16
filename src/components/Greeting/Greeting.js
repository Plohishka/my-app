import React, {useState} from 'react';

function Greeting() {
    const [text, setText] = useState('Hello');

    return <div>
      <h1 onClick={(event) => setText('Bye')}>{text}</h1>
    </div>
  }


export default Greeting;