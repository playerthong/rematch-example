import React, { Component } from 'react';
import {Button,Typography} from '@material-ui/core';
import Appbar from '../appbar'
import DuoIcon from '@material-ui/icons/Duo';
import { withStyles } from '@material-ui/core';
import {styles} from './styles'
import Carousel from '../carousel'
import Main from './main'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PageNotFound from './pageNotFound'
import ButtonPage from './buttonPage' 
class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div> 
            <Appbar/> 
            <BrowserRouter>
                <Switch> 
                    <Route exact path="/buttonPage" render={props => <ButtonPage {...props} />} /> 
                    <Route exact path="/" render={props => <Main/>} />  
                    <Route  render={props => <PageNotFound {...props} />} /> 
                </Switch>  
            </BrowserRouter>
            </div> 
        ); 
    }  
}

export default (withStyles(styles, { withTheme: true })(Home)); 