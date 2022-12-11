import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: '#303F60',
        display: 'flex',
        justifyContent: 'space-between',
        // zIndex: 1024
    },
}));

export default useStyles;


