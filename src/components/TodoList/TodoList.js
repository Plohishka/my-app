import React, { useState } from 'react';
import TodoItem from './TodoItem';


function TodoList(props) {

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

    const res = notes.map((note) => {
        return <TodoItem
            id={note.id}
            text={note.text}
            remove={remove}
        />
    })

    return <ul>
        {res}
    </ul>


}

export default TodoList;