import React from 'react';
import { SCHEMA } from '../../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}

function SignUpForm(props) {

    const handleSubmitToFormik = (value, actions) => {
        console.log(value);
        actions.resetForm();
    }


    return (
        <Formik initialValues={initialState} onSubmit={handleSubmitToFormik} validationSchema={SCHEMA}>
            {(formikProps) => {
                return (
                    <Form>
                        <Field placeholder='firstName' name='firstName' />
                        <ErrorMessage name='firstName'/>
                        <Field placeholder='lastName' name='lastName' />
                        <ErrorMessage name='lastName'/>
                        <Field placeholder='email' name='email' />
                        <ErrorMessage name='email'/>
                        <Field type='password' placeholder='password' name='password' />
                        <ErrorMessage name='password'/>
                        <button type='submit'>Send</button>
                    </Form>
                )
            }}
        </Formik>
    )
}


export default SignUpForm;
