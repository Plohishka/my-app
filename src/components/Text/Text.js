import React, { useState } from 'react';


function Text() {

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

    function addLi() {
        return arr.map((note) => <li key={note.id}>{note.text}</li>);
    }

    return <ul>
        {addLi()}
    </ul>


}

export default Text;