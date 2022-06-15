import AsyncRoute from "preact-async-route";
import Router from "preact-router";

export const AppMain = () => {
    return (
        <Router>
            <AsyncRoute path="/" />
        </Router>
    );
};
