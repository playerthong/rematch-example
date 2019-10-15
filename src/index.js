import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { init } from "@rematch/core"; 
import * as models from "./models"; 
import App from './App'
const store = init({
    models
});
render((
    <Provider store={store}> 
       <App/>  
    </Provider>
), document.getElementById('root'));

 
