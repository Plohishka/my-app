import React, {useState} from 'react';

function Toggler(props) {

    function change() {
        props.addFunc();
    }

    return <button onClick={change}>{props.buttonText}</button>
}

export default Toggler;