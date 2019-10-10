export const styles = theme => ({
    titleApp: {
        padding: '1rem',
        display: 'flex'
    },
    iconTitle: {
        width: '5rem',
        height: '5rem',
        color: '#202020e3',
    },
    containerTitle: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '1rem',
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#0b9739'
    },
    subTitleNumber: {
        color: '#009330',
        fontWeight: 'bold'
    },
    containerCarousel:{
        backgroundColor: '#f7fbfc',
        padding: '1rem 1.5rem'
    }, 
    image: {
        width: '100%'
    },
    appBarSpacer: theme.mixins.toolbar,

}) 
export const Buttonstyles = theme => ({
    button: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        padding: 'none',
        textTransform: 'unset', 
    },
    containerButton: {
        padding: '2rem',
        textAlign: 'center'
    }
}) 
export const pageNotFoundstyles = theme => ({
    title: { 
        fontWeight: 'bold', 
    },
    containerTitle: {
        textAlign: 'center',
        padding: '1rem'
    } 
})