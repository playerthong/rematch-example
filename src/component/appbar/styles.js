export const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }), 
    }, 
    rootAppBar: {
            boxShadow: 'none',
            color: '#000000b3',
            backgroundColor: 'white',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            borderBottom: 'solid 1px #0000001f',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        position: 'absolute',
        left: '0px',
    }, 
    header: {
        display: 'flex',
        justifyContent: 'center',
        /* align-items: center, */
        width: '100%',
    },
    iconHeader: {
        color: '#46ce50',
        height: '2.5rem',
        width: '2.5rem'
    }
}) 