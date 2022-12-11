import React from 'react'
import useStyles from './style';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const userLogin = JSON.parse(localStorage.getItem('userInfo'))
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <div>
                <span style={{ color: 'white' }}><b>My</b></span>
                <span style={{ color: '#43AFFF' }}><b>Jobs</b></span>
            </div>
            {userLogin ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>
                    Logout
                </Button>
            ) : (
                <a href="/login">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </a >)}

        </div >
    )
}

export default Navbar