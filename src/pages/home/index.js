import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoint from '../../config/url';
import useStyles from "./style";
import { Paper, Grid } from '@material-ui/core';
import writing from "../../images/writing@2x.png";
import ViewApplicationsModal from '../components/ViewApplicationsModal';
import HomeIcon from '@material-ui/icons/Home';
import Pagination from '@material-ui/lab/Pagination';

const Home = () => {
    const classes = useStyles();
    const [jobs, setJobs] = useState()
    const [page, setPage] = useState(1);
    // const [rowsPerPage, setRowsPerPage] = useState(50);
    const handleChangePage = (event, newPage) => {
        //fetch data from pagination
        setPage(newPage);
        console.log(newPage)
    };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value));
    //     setPage(0);
    // };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const headers = {
        "Authorization": userInfo?.data.token ? userInfo?.data.token : "",
    };
    useEffect(() => {
        const jobsApi = async () => {
            const res = await Axios.get(`${endpoint.getPostedJobs}?page=${page}`, { headers })
            setJobs(res.data.data)
        }
        jobsApi()
    }, [page])

    return (
        <div>
            <div style={{ backgroundColor: '#303F60', height: '50vh' }}>
                <div className={classes.header}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <HomeIcon />
                            <span>Home</span>
                        </div>
                        <h2>Jobs posted by you</h2>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#EDF6FF' }}>
                <div style={{ paddingLeft: '60px', paddingRight: '60px' }}>
                    {jobs && jobs?.metadata.count == 0 ? (
                        <div style={{ height: '50vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <img src={writing}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        objectFit: "contain"
                                    }} />
                                <div>Your Posted Job Will be Shown Here</div>
                                <br />
                                <div style={{ textAlign: 'center' }}>
                                    <button style={{ backgroundColor: '#43AFFF', borderRadius: '5px', border: '0px', height: '30px' }}>
                                        Post a Job
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Grid container spacing={1}>
                            {jobs?.data.map((item) => {
                                return (
                                    <Grid key={item.id} container spacing={1} xs={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Paper className={classes.paper} style={{ position: 'relative' }}>
                                            <h3>{item?.title.substring(0, 15)}...</h3>
                                            <p>{item?.description.substring(0, 70)}...</p>
                                            <span style={{ position: 'absolute', bottom: 10 }}>{item?.location.substring(0, 10)}</span>
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
                {jobs?.metadata.count != 0 && (
                    <div className={classes.pagination}>
                        <Pagination count={parseInt(jobs?.metadata.count / 20)} onChange={handleChangePage} />
                    </div>
                )}

            </div>
        </div>

    )
}

export default Home