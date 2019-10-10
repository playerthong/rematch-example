import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {styles} from './styles' 
import WhatsAppIcon from '@material-ui/icons/WhatsApp'; 
class AppBarComponent extends React.Component {
    render() {
        const {classes} = this.props
        return (
          <div className={classes.root}> 
            <AppBar position="static"
                classes={{
                    root: classes.rootAppBar, // class name, e.g. `root-x` 
                }}  >
                <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div className={classes.header}>
                    <WhatsAppIcon className={classes.iconHeader}/>
                </div>
                </Toolbar>
            </AppBar> 
        </div>
        );
    }
} 
export default (withStyles(styles, { withTheme: true })(AppBarComponent));
 
