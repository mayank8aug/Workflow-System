
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Auth/Login';
import Workflows from './Components/Workflow/Workflows'
import './App.css';
import './Common.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <Switch>
                    <Route exact path="/" component={props => <Login {...props} />} />
                    <Route exact path="/workflows" component={props => <Workflows {...props} />} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;