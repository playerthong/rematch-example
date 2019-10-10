import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core'; 
import {styles} from './styles.js';
import { Link } from 'react-router-dom';

class DrawerSidebar extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          selected: ''
        } 
    } 
    async componentDidMount() { 
      this.props.onRef(this);
    } 
    handleDrawer = (open) => { 
      if(open != this.state.open)
        this.setState({
          open: open
        })
    }; 
    handleSelect = (value = '') => () => {
        this.setState({ selected: value })
        this.handleDrawer(false)
    }
    render() {
      const {classes} = this.props
      const {selected} = this.state
      return (
        <div className={classes.root}> 
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper,
            }} 
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={()=>this.handleDrawer(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </div> 
            <List>
                <Link to='/' className={classes.link}>
                  <ListItem button key={'home'} selected={selected === 'main' ? true : false} onClick={this.handleSelect('main')}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" className={classes.item}>
                            Home
                        </Typography>
                    </ListItemText> 
                  </ListItem>
                </Link>
                <Link to='/buttonPage' className={classes.link}>
                  <ListItem button key={'home'} selected={selected === 'demo1' ? true : false} onClick={this.handleSelect('demo1')}>
                    <ListItemIcon><InboxIcon /></ListItemIcon> 
                    <ListItemText>
                        <Typography variant="body1" className={classes.item}>
                            Demo 1
                        </Typography>
                    </ListItemText> 
                  </ListItem>
                </Link>
                <Link to='/testPageNotFound' className={classes.link}>
                  <ListItem button key={'home'} selected={selected === 'demo2' ? true : false} onClick={this.handleSelect('demo2')}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText> 
                        <Typography variant="body1" className={classes.item}>
                            Demo 2
                        </Typography>
                    </ListItemText> 
                  </ListItem>
                </Link>
            </List> 
          </Drawer> 
        </div>
      );
    }
}
export default (withStyles(styles, { withTheme: true })(DrawerSidebar)); 
