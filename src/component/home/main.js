import React, { Component } from 'react';
import {Button,Typography} from '@material-ui/core';
import Appbar from '../appbar'
import DuoIcon from '@material-ui/icons/Duo';
import { withStyles } from '@material-ui/core';
import {styles} from './styles'
import Carousel from '../carousel'


class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <>  
            <div className={classes.titleApp}>
                <DuoIcon className={classes.iconTitle}/>
                <div className={classes.containerTitle}>
                    <Typography variant="h6" component="h2" className={classes.title}>
                        Tiktock
                    </Typography> 
                    <div className={classes.subTitle}> <span className={classes.subTitleNumber}>19.8</span> per install </div>
                </div> 
            </div>
            <div className={classes.containerCarousel}>
                <Carousel/>
            </div>
            <div className={classes.titleApp}>
                <DuoIcon className={classes.iconTitle}/>
                <div className={classes.containerTitle}>
                    <Typography variant="h6" component="h2" className={classes.title}>
                        Tiktock
                    </Typography> 
                    <div className={classes.subTitle}> <span className={classes.subTitleNumber}>19.8</span> per install </div>
                </div> 
            </div>
            <div className={classes.containerCarousel}>
                <Carousel/>
            </div>
            </> 
        ); 
    }  
}

export default (withStyles(styles, { withTheme: true })(Home)); 