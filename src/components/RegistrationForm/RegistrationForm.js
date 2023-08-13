import React, { useState, useReducer } from 'react';

const initialState = {
    clickCount: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                clickCount: state.clickCount + 1
            }
        }
        default: {
            return state;
        }
    }
}

const RegistrationForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clickHandler = () => {
        dispatch({
            type: 'CLICK_INCREMENT'

        })
    }

    /* const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */


    return (
        <>
        <h1>{state.clickCount}</h1>
        <button onClick={clickHandler}>Click me</button>
        </>
        //  <form>
        
        //     <input type='text' name='firstName' placeholder='firstName' value={firstName} />
        //     <input type='text' name='lastName' placeholder='lastName' value={lastName} />
        //     <input type='text' name='email' placeholder='emeil' value={email} />
        //     <input type='text' name='password' placeholder='password' value={password} />
        //     <button type='submit'>Registration</button>
        // </form> 
    );
}

export default RegistrationForm;
