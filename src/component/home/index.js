import React, { Component } from 'react';
import {Button,Typography} from '@material-ui/core';
import Appbar from '../appbar'
import DuoIcon from '@material-ui/icons/Duo';
import { withStyles } from '@material-ui/core';
import {styles} from './styles'
import Carousel from '../carousel'
import Main from './main'
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pageNotFound'
import ButtonPage from './buttonPage' 
import Sidebar from '../sidebar'
class Home extends Component {
    handleDrawer = (open) => { 
        this.sidebar.handleDrawer(open)
    }
    render() {
        const {classes} = this.props
        return (
            <div> 
            <Appbar handleDrawer={this.handleDrawer}/> 
            <Sidebar onRef={id => this.sidebar = id} handleDrawer={this.handleDrawer}/> 
            <div className={classes.appBarSpacer} /> 
            <Switch> 
                <Route exact path="/buttonPage" render={props => <ButtonPage {...props} />} /> 
                <Route exact path="/" render={props => <Main/>} />  
                <Route  render={props => <PageNotFound {...props} />} /> 
            </Switch>   
            </div> 
        ); 
    }  
}

export default (withStyles(styles, { withTheme: true })(Home)); 