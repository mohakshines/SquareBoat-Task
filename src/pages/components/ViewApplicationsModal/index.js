import React, { useState } from 'react'
import {
    Button,
    Modal,
    Fade,
    Backdrop,
    Grid,
    Paper
} from "@material-ui/core";
import useStyles from './style';
import axios from 'axios';
import endpoint from '../../../config/url';
import noApplicants from "../../../images/curriculum@2x.png";
import CloseIcon from "@material-ui/icons/Close";

const ViewApplicationsModal = ({ id }) => {

    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [candidates, setCandidates] = useState()
    const handleClose = () => {
        setOpen(false);
    };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const headers = {
        "Authorization": userInfo?.data.token ? userInfo?.data.token : "",
    };
    const handleOpen = async () => {
        const res = await axios.get(`${endpoint.getCandidatesperJob}/${id}/candidates`, { headers })
        setCandidates(res.data.data ? res.data.data : [])
        setOpen(true);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpen()}
                size="small"
            >
                Open Modal
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <b>Applications For the Job</b><br />
                                <div>{candidates?.length} applications</div>
                            </div>
                            <CloseIcon
                                onClick={handleClose}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>

                        {candidates?.length != 0 ? (
                            <Grid container spacing={2} style={{ backgroundColor: '#A9AFBC', borderRadius: '10px', padding: '20px' }}>
                                {candidates?.map((item) => {
                                    return (
                                        <>
                                            <Grid key={item.id} item spacing={2} xs={6}>
                                                <Paper elevation={3} style={{ padding: '10px' }} className={classes.contentPaper}>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className={classes.circle}>{item?.name[0].toUpperCase()}</div>
                                                        <div>
                                                            <b>{item?.name}</b><br />
                                                            <div>{item?.email}</div><br />
                                                        </div>
                                                    </div>
                                                    <b>Skills</b><br />
                                                    <div style={{ wordWrap: 'break-word' }}>{item?.skills}</div>
                                                </Paper>
                                            </Grid>
                                        </>
                                    )
                                })}

                            </Grid>
                        ) : (
                            <div>
                                <div style={{ height: '50vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div>
                                        <img src={noApplicants}
                                            style={{
                                                width: "100%",
                                                height: "100px",
                                                objectFit: "contain"
                                            }} />
                                        <p>No Applications Available</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Fade >
            </Modal >
        </div >
    )
}

export default ViewApplicationsModal