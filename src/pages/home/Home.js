import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import endpoint from '../../config/url';
import useStyles from "./style";
import { Paper, Grid, Button } from '@material-ui/core';
import writing from "../../images/writing@2x.png";
import ViewApplicationsModal from '../components/ViewApplicationsModal';

const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [jobs, setJobs] = useState()
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const headers = {
        "Authorization": userInfo?.data.token ? userInfo?.data.token : "",
    };
    useEffect(() => {
        const jobsApi = async () => {
            const res = await Axios.get(endpoint.getPostedJobs, { headers })
            setJobs(res.data.data)
        }
        jobsApi()
    }, [])

    return (
        <div style={{ backgroundColor: "lightblue", width: '100%' }}>
            <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1>Home</h1>
                </div>
                {jobs && jobs.metadata.count == 0 ? (
                    <div style={{ height: '50vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img src={writing}
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "contain"
                                }} />
                            <span>Your Posted Job Will be Shown Here</span>
                            <button style={{ backgroundColor: '#43AFFF', borderRadius: '5px', border: '0px', height: '30px' }}>
                                Post a Job
                            </button>
                        </div>
                    </div>
                ) : (
                    <Grid container spacing={2}>
                        {jobs?.data.map((item) => {
                            return (
                                <Grid key={item.id} container spacing={2} xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Paper className={classes.paper} style={{ position: 'relative' }}>
                                        <h3>{item?.title.substring(0, 15)}...</h3>
                                        <p>{item?.description.substring(0, 70)}...</p>
                                        <span style={{ position: 'absolute', bottom: 10 }}>{item?.location.substring(0, 10)}</span>
                                        {/* <button  onClick={viewApplication}>View Applications</button> */}
                                        <div style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#43AFFF33', borderRadius: '5px', border: '0px', height: '30px' }}>
                                            <ViewApplicationsModal id={item.id} />
                                        </div>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default Home