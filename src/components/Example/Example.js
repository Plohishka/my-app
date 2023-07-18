import React, {useState} from 'react';


function Example() {

    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    const res = notes.map((note, index) => <li key={index}>{note}</li>);

    function add() {
        setNotes(notes.map((note, index, notes) => {
            notes.push(notes[notes.length]);
            return notes;
        }))
    }

    return <ul>
        {res}
        <button onClick={add}>click</button>
    </ul>

}


export default Example;