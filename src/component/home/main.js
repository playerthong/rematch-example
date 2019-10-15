import React, { Component } from 'react';
import {Button,Typography} from '@material-ui/core';
import DuoIcon from '@material-ui/icons/Duo';
import { withStyles } from '@material-ui/core';
import {styles} from './styles'
import { connect } from 'react-redux';
import Loading from '../loading'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        } 
    } 
    async componentDidMount() {
        this.loading.start()
        let result = await this.props.getNews()
        this.loading.stop()
        console.log(result)
        if(result && result.articles && result.articles.length) this.setState({data: result.articles})
    }
    render() {
        const {classes} = this.props 
        const {data} = this.state 
            return(
                <>
                <Loading onRef= {id => this.loading = id}/>
                {data.map((ele, index)=> {
                    console.log(ele)
                    return(
                    <> 
                        <div className={classes.titleApp}>
                            <DuoIcon className={classes.iconTitle}/>
                            <div className={classes.containerTitle}>
                                <Typography variant="h6" component="h2" className={classes.title}>
                                    {ele.title}
                                </Typography> 
                                <div className={classes.subTitle}> <span className={classes.subTitleNumber}>19.8</span> per install </div>
                            </div> 
                        </div>
                        <div className={classes.containerCarousel}>
                            <img  className={classes.image} src={ele.urlToImage}/>
                        </div> 
                    </>
                    )
                })} 
                </>
            )   
    }  
}
const mapState = state => ({
});

const mapDispatch = dispatch => ({ 
    getNews: dispatch.news.getNews,
}); 
export default connect(mapState, mapDispatch)(withStyles(styles, { withTheme: true })(Home));
