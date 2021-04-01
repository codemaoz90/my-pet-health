import React from "react";
import Landing from "../pages/Landing";
import Splash from "../pages/Splash";
import Dog from "../pages/Dog";
import Cat from "../pages/Cat";
import NavBar from "../components/SideBar/NavBar";
import Welcome from "../pages/Welcome"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Splash />
                </Route>

                <Route path="/landing">
                    <Landing />
                </Route>
                <Route path="/sidebar">
                    <NavBar />
                </Route>

                <Route path="/login">
                    <Welcome />
                </Route>

                <Route path="/dog">
                    <Dog />
                </Route>

                <Route path="/cat">
                    <Cat />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;