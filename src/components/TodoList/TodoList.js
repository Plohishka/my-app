import React, { useState } from 'react';


function TodoList() {

   const arr = [
        {
            id: '1',
            text: 'go to walk'
        },
        {
            id: '2',
            text: 'watch tv'
        },
        {
            id: '3',
            text: 'play game'
        }
    ]

    const [notes, setNotes] = useState(arr);
  
    function remove(id) {
        setNotes(notes.filter((note) => {
            return note.id !== id;
        }))
    }
    

        const res =  notes.map((note) => <li key={note.id}>
            <span>{note.text}</span> 
        <button onClick={() => remove(note.id)}>
            delete
        </button>
        </li>);

    

    return <ul>
        {res}
        
    </ul>


}

export default TodoList;