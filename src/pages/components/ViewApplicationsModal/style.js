import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
    return {
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        paper: {
            position: 'absolute',
            backgroundColor: 'white',
            padding: theme.spacing(2, 4, 3),
            borderRadius: '10px',
            border: '0px',
            minWidth: "50vw",
            maxWidth: "50vw",
            height: "70%",
            width: "50%",
            maxHeight: "90vh",
            overflow: 'auto'
        },
        contentPaper: {
            height: '162px',
            width: '240px',
            borderRadius: '10px',
        },
        circle: {
            borderRadius: "50%",
            height: '50px',
            width: '50px',
            backgroundColor: '#D9EFFF',
            color: '#303F60',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px'
        }

    };
});
export default useStyles;

