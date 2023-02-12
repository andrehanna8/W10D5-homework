import React from "react";
import { Link, Redirect, Route, useParams, useRouteMatch } from "react-router-dom";

const Profile = () => {
    const params = useParams();
    const { url } = useRouteMatch()
    const { userId } = params;

    if (userId === "0") return <Redirect to="/" />

    return (
        <> 
        <h1> Hello from User Profile {userId} !</h1>
        <Link to={`${url}`}>Photos</Link>
        <Link to={`${url}`}>About me</Link>
        

        <Route path={`${url}/photos`}>
            <h2>Photos for {userId}</h2>
        </Route>

        <Route path={`${url}/about-me`}>
            <h2>About me for {userId}</h2>
        </Route>
        </>
    )
};

export default Profile;