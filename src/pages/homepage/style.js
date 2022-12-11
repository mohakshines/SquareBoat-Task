import { makeStyles } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";


const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: 'relative',
        },
        outerHeroImg: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 70,
            right: 60
        },
        heroImg: {
            height: '400px',
            width: '500px',
            marginBottom: '30px',
            borderRadius: '5px',
            opacity: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper: {
            // color: theme.palette.text.secondary,
            height: '122px',
            width: '200px',
            marginBottom: '30px',
            borderRadius: '5px',
            opacity: 1,
            marginLeft: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paper2: {
            height: '200px',
            width: '300px',
            borderRadius: '5px',
            opacity: 1,
            marginLeft: '5px',
            color: '#43AFFF',
            padding: '20px',
            display: "flex ",
            flexDirection: 'column',
        },
        imgOuterDiv: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        section: {
            backgroundColor: '#EDF6FF',
            paddingTop: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        para: {
            wordBreak: 'break-word',
            color: '#303F60',
            marginTop: "auto"
        }

    };
});
export default useStyles;

