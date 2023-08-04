import React, { Component } from 'react';
import styles from './SignInForm.module.css';


class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isEmailValid: true
        }

    }

    submitHandler = (event) => {
        event.preventDefault();
        const {email} = this.state;

        if (!email.includes('@')) {
            this.setState({
                isEmailValid: false
            })
        }
    }

    universalChangeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }


    render(props) {
        const {email, password, isEmailValid} = this.state;
        return (
            <form className={styles.formWrapper} onSubmit={this.submitHandler}>
                <label>
                    Email:
                    <input className={isEmailValid ? '' : styles.invalid} type='text' name='email' value={email} placeholder='email' onChange={this.universalChangeHandler}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='password' value={password} placeholder='password' onChange={this.universalChangeHandler}/>
                </label>
                <button type='submit'>Send form</button>
            </form>
        )

        
    }

}



export default SignInForm;