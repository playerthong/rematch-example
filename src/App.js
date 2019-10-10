import React from 'react';
// import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './component/home'
import ButtonPage from './component/home/buttonPage'
// import 'bootstrap/dist/css/bootstrap.css';

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
                     {/* <Route path="/buttonPage" render={props => <ButtonPage {...props} />} /> */}
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

// export default connect(mapState, mapDispatch)(translate('translations')(App));
export default connect(mapState, mapDispatch)(App);

