
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Auth/Login';
import Workflows from './Components/Workflow/Workflows';
import Workflow from './Components/Workflow/Workflow';
import './App.css';
import './Common.css';
import Growl from './Components/Messages/Growl';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app-container">
                <Header />
                <Switch>
                    <Route exact path="/" component={props => <Login {...props} />} />
                    <Route exact path="/workflows" component={props => <Workflows {...props} />} />
                    <Route exact path="/workflows/:index" component={props => <Workflow {...props} />} />
                </Switch>
                <Growl />
            </div>
        </BrowserRouter>
    )
}

export default App;