import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import {styles} from './styles'

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        } 
    } 
    async componentDidMount() { 
      this.props.onRef(this);
    }
    start = () => {
        this.setState({
            loading: true
        })
    }
    stop = () => {
        this.setState({
            loading: false
        })
    }
    render() {
        const {classes} = this.props
        const {loading} = this.state
        if(loading)
        return (
            <div className={classes.container} >
                <CircularProgress className={classes.progress} /> 
            </div>
        );
        else return(<></>)
    }
}
export default (withStyles(styles, { withTheme: true })(Loading));  