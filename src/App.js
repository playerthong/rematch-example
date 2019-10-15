import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './component/home'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }    
    render() { 
        return ( 
            <BrowserRouter>
                <Switch>  
                    <Route path='/' render={(props) => <Home {...props}/>} /> 
                </Switch>
            </BrowserRouter>
        )
    }
}
const mapState = state => ({   

});

const mapDispatch = dispatch => ({
     
});

export default connect(mapState, mapDispatch)(App);

