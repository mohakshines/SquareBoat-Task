import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

    formHeading: {
        textAlign: 'start',
    },
    form: {
        height: '400px',
        width: '400px',
        textAlign: 'center',
        // border: '5px solid #0B69E3',
        borderRadius: '5px',
        boxShadow: '0px 3px 6px #557DA526',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        top: 180,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto', 
    },

}));

export default useStyles;
