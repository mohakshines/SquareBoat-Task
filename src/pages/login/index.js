import React, { useState, useEffect } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core'
import useStyles from "./style";
import { Formik, Form, Field } from 'formik'
import * as yup from "yup";
import Axios from "axios";
import endpoint from '../../config/url'
import { useNavigate } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

export default function SignUpForm() {
    const classes = useStyles();
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
    const [alert, setAlert] = useState(false)
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
            <div style={{ backgroundColor: '#303F60', height: '50vh', position: 'relative' }}></div>
            <div style={{ backgroundColor: '#EDF6FF', height: '50vh', position: 'relative' }}></div>

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
                    if (data?.code == 200) {
                        setAlert(true)
                        localStorage.setItem("userInfo", JSON.stringify(data));
                        navigate("/home");
                        setTimeout(() => {
                            setAlert(false)
                        }, 3000)
                    }
                    // setMyArray(oldArray => [...oldArray, data]);
                    // formik.resetForm()
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form className={classes.form}>
                        <div>
                            <h1 className={classes.formHeading}>Log In</h1>
                            <Field as={TextField} id="outlined-basic" label="Enter your email" name='email' variant="outlined" size="small" helperText={formik.touched.email && formik.errors.email} error={formik.touched.email && Boolean(formik.errors.email)} /><br /><br />
                            <Field as={TextField} id="outlined-basic" label="Enter your Password" name='pass' type="password" variant="outlined" size="small" helperText={formik.touched.pass && formik.errors.pass} error={formik.touched.pass && Boolean(formik.errors.pass)} /><br /><br />
                            <Button style={{ backgroundColor: '#43AFFF', color: 'white' }} size="small" variant='contained' type='submit'>Log In</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={alert}
            >
                <Alert onClose={() => setAlert(false)} severity="success">
                    Successfully Logged In !
                </Alert>
            </Snackbar>
        </>
    )
}
