import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useStyles from './style';
import Hero from '../../images/Hero.png'
import Goldline from '../../images/goldline@2x.png'
import Idea from '../../images/ideaa@2x.png'
import Kanba_1 from '../../images/kanba-1@2x.png'
import Kanba from '../../images/kanba@2x.png'
import Lighting from '../../images/lighting@2x.png'
import Liva from '../../images/liva@2x.png'
import Solaytic from '../../images/solaytic@2x.png'
import Velocity from '../../images/velocity-9@2x.png'
import Ztos from '../../images/ztos@2x.png'
import { Paper, Grid, Button } from '@material-ui/core';



const Homepage = () => {
    const navigate = useNavigate();
    const classes = useStyles()

    useEffect(() => {
        onLoad();
    }, []);
    const titles = ['Get More Visibility', 'Organize Your Candidates', 'Verify Their Abilities']
    const arr1 = [Solaytic, Kanba, Lighting, Ztos, Kanba_1]
    const arr2 = [Goldline, Idea, Liva, Velocity]


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
        <div className={classes.root}>
            <div style={{ backgroundColor: '#303F60', fontSize: '50px', height: '50vh' }}>
                <div style={{ paddingLeft: '200px', paddingTop: '60px' }}>
                    <span style={{ color: 'white' }}>Welcome to</span>
                    <div>
                        <span style={{ color: 'white' }}>My</span>
                        <span style={{ color: '#43AFFF' }}>Jobs</span>
                    </div>
                    <div className={classes.outerHeroImg}>
                        <div className={classes.heroImg}>
                            <img src={Hero} height='500px' width='600px' />
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.section}>
                <div>
                    <h2>Why Us</h2>
                    <div className={classes.imgOuterDiv}>
                        {titles.map((item) => {
                            return (
                                <div className={classes.paper2} style={{ backgroundColor: 'white' }}>
                                    <b style={{ fontSize: '28px' }}>{item}</b>
                                    <p className={classes.para}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <div>
                    <h2>Companies Who Trust Us </h2>
                    <div className={classes.imgOuterDiv}>
                        {arr1.map((item) => {
                            return (
                                <div className={classes.paper}>
                                    <img src={item} height='100px' width='100%' />
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.imgOuterDiv}>
                        {arr2.map((item) => {
                            return (
                                <div className={classes.paper}>
                                    <img src={item} height='100px' width='100%' />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Homepage