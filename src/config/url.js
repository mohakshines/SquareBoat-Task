const URL = process.env.REACT_APP_BASE_URL;
const endpoint = {
    login: `${URL}auth/login`,
    getPostedJobs: `${URL}recruiters/jobs`,
    getCandidatesperJob: `${URL}recruiters/jobs/`,

}

export default endpoint