import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        onLoad();
    }, []);

    function onLoad() {
        const userLogin = JSON.parse(localStorage.getItem('userInfo'))
        if (!userLogin) {
            navigate("/");
        }
        else {
            navigate("/home");
        }
    }
    return (
        <div>
            <div style={{ backgroundColor: '#303F60', fontSize: '50px', height: '50vh' }}>
                <div style={{ marginLeft: '100px', paddingTop: '40px' }}>
                    <span style={{ color: 'white' }}>Welcome to</span>
                    <div>
                        <span style={{ color: 'white' }}>My</span>
                        <span style={{ color: '#43AFFF' }}>Jobs</span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#EDF6FF' }}>
                scsc
            </div>


        </div>
    )
}

export default Homepage