import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Headers";
import dashboard from "../components/Dashboard";

const Router = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={dashboard} exact />
                <Route component={() => "404 Not Found"} />
            </Switch>
        </div>
    )
}

export default Router;
