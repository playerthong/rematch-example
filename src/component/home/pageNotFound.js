import React, { Component } from 'react';
import { Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import {pageNotFoundstyles} from './styles'
class PageNotFound extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.containerTitle}>
                <Typography variant="h6" component="h2" className={classes.title}>
                    Page Not found
                </Typography>  
            </div>
        );
    }
}

export default (withStyles(pageNotFoundstyles, { withTheme: true })(PageNotFound));  