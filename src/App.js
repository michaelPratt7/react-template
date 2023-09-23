import React from "react";
import {Switch, Route} from "react-router-dom";
import Layout from "./react-json-practice";

function App() {
    return (
<>
    <Switch>
        <Route exact path = "/">
            <Layout />
        </Route>
    </Switch>
    </>
    )
}

export default App;
