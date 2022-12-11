import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        // width: "100%"
        height: '162px',
        width: '240px',
        marginBottom: '30px',
        boxShadow: '0px 3px 6px #557DA526',
        borderRadius: '5px',
        opacity: 1,
        wordWrap: 'break-word',

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: '#303F60',
        paddingLeft: '70px',
        paddingTop: '10px',
        color: 'white'
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "30px",
        marginTop: '30px'
    }

}));

export default useStyles;


