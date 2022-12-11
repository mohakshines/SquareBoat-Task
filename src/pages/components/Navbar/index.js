import React, { useState } from 'react'
import useStyles from './style';
import { Button, Snackbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@material-ui/lab';



const Navbar = () => {
    const classes = useStyles();
    const userLogin = JSON.parse(localStorage.getItem('userInfo'))
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false)

    const logout = () => {
        localStorage.clear()
        navigate('/')
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }

    const login = () => {
        navigate('/login')
    }

    return (
        <>
            <div className={classes.root}>
                <a href="/">
                <div>
                    <span style={{ color: 'white' }}><b>My</b></span>
                    <span style={{ color: '#43AFFF' }}><b>Jobs</b></span>
                </div>
                </a>
                {userLogin ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => logout()}>
                        Logout
                    </Button>
                ) : (
                        <Button variant="contained" color="primary" onClick={() => login()}>
                            Login
                        </Button>
                )}
            </div >
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center", }}
                open={alert}
            >
                <Alert onClose={() => setAlert(false)} severity="success">
                    Successfully Logged out !
                </Alert>
            </Snackbar>

        </>
    )
}

export default Navbar
