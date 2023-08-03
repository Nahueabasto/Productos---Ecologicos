import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";


const UserProfile = () => {
    const dispatch = useDispatch();
    //const

    const { user, isAuthenticated, isLoading } = useAuth0();


    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <pre>{JSON.stringify(user)}</pre>
        </div>
    )

}

export default UserProfile;