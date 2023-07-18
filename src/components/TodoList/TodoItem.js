


function TodoItem({ id, text, remove }) {


    return (

        <li key={id}>
            <span>{text}</span>
            <button onClick={() => remove(id)}>
                delete
            </button>
        </li>

    )


}






export default TodoItem;