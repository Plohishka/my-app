import React, { useState, useReducer } from 'react';
import {reducer} from '../../reducers';
import CONSTANTS from '../../constants';

const {ACTIONS} = CONSTANTS;

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const RegistrationForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const inputChangeHandler = ({target: {value, name}}) => {
        dispatch({
            type: ACTIONS.INPUT_CHANGE,
            payload: {
                value,
                name
            }
        })
    }

    const {firstName, lastName, email, password} = state;

    return (
         <form>
        
            <input type='text' name='firstName' placeholder='firstName' value={firstName} onChange={inputChangeHandler}/>
            <input type='text' name='lastName' placeholder='lastName' value={lastName} onChange={inputChangeHandler}/>
            <input type='text' name='email' placeholder='emeil' value={email} onChange={inputChangeHandler}/>
            <input type='text' name='password' placeholder='password' value={password} onChange={inputChangeHandler}/>
            <button type='submit'>Registration</button>
        </form> 
    );
}

export default RegistrationForm;
