import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../dist/assets/css/style.css';

import Home from './components/home/Home';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>,
    

document.getElementById('root')
);