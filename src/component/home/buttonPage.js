import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core';
import {Buttonstyles} from './styles'
class ButtonPage extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.containerButton}>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.button}
                    > 
                    Reload Offers
                </Fab>
            </div>
        );
    }
}
export default (withStyles(Buttonstyles, { withTheme: true })(ButtonPage));  