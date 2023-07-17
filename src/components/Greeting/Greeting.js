import React, {useState} from 'react';

function Greeting() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    return <div>
      <input value={value1} onChange={(event) => setValue1(event.target.value)}/>
      <input value={value2} onChange={(event) => setValue2(event.target.value)}/>
      <p>{Number(value1) + Number(value2)}</p>
    </div>
  }


export default Greeting;