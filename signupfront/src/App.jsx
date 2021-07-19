import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import login from "./Pages/login"
import register from "./Pages/register"
import loggedIn from "./Pages/loggedIn"


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/login" component={login} />
                    <Route exact path="/loggedIn" component={() => <loggedIn authorized={false}/>} />
                    <Route exact path="/register" component={register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;