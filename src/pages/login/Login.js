import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core'
import useStyles from "./style";
import { Formik, Form, Field } from 'formik'
import * as yup from "yup";
import Axios from "axios";
import endpoint from '../../config/url'
import { useNavigate } from 'react-router-dom';


export default function SignUpForm() {
    const style = useStyles();
    const navigate = useNavigate();
    const validationSchema = yup.object().shape({
        email: yup
            .string("Enter your email")
            .email("Put your valid email")
            .required("Required"),
        pass: yup
            .string("Enter your password")
            .required("Required"),
    });
    // const [data, setData] = useState({
    //     email: '',
    //     password: ''
    // })
    // console.log(userLogin)
    const userLogin = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(() => {
        if (userLogin && userLogin?.code == 200) {
            navigate("/home");
        }
        // else {
        //   loginErrorFunc(userInfo && userInfo.message && userInfo.message.common);
        // }
    }, [userLogin]);


    return (
        <>
            <a href="/">
                <button>Home</button>
            </a>
            <Formik
                initialValues={{
                    email: "",
                    pass: "",
                }}
                onSubmit={async (values, formik) => {
                    // setData({ email: values.email, password: values.pass })
                    let payload = {
                        email: values.email,
                        password: values.pass,
                    };
                    const { data } = await Axios.post(endpoint.login, payload)
                    console.log(data)
                    if (data?.code == 200) {
                        localStorage.setItem("userInfo", JSON.stringify(data));
                        navigate("/home");
                    }
                    // setMyArray(oldArray => [...oldArray, data]);
                    // formik.resetForm()
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (

                    <Form className={style.form}>
                        <h1 className={style.formHeading}>Log In</h1>
                        <Field as={TextField} id="outlined-basic" label="Enter your email" name='email' variant="outlined" size="small" helperText={formik.touched.email && formik.errors.email} error={formik.touched.email && Boolean(formik.errors.email)} /><br /><br />
                        <Field as={TextField} id="outlined-basic" label="Enter your Password" name='pass' variant="outlined" size="small" helperText={formik.touched.pass && formik.errors.pass} error={formik.touched.pass && Boolean(formik.errors.pass)} /><br /><br />
                        <Button color="primary" size="small" variant='contained' type='submit'>Submit</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
